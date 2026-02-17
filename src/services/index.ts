import api from "../lib/axios";
import type { ApplicationPayload, Position, User } from "../types";

export async function getUser(): Promise<User> {
    const email = "lautarozule80@gmail.com";

    try {
        const { data } = await api.get<User>(`/api/candidate/get-by-email?email=${email}`);
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get user");
    }
}

export async function getPositions(): Promise<Position[]> {
    try {
        const { data } = await api.get<Position[]>(`/api/jobs/get-list`);
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get positions");
    }
}

export async function applyToPosition(payload: ApplicationPayload): Promise<void> {
    try {
        const response = await api.post("/api/candidate/apply-to-job", payload);
        if (response.status !== 200) {
            throw new Error("Failed to apply to position");
        }
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to apply to position");
    }
}