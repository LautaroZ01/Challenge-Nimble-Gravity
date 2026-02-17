import { useQuery } from "@tanstack/react-query";
import { getPositions } from "../services";
import type { User } from "../types";
import { PositionItem } from "./PositionItem";

interface PositionsListProps {
    user: User;
}

export function PositionsList({ user }: PositionsListProps) {
    const { data: positions, isLoading, error } = useQuery({
        queryKey: ["positions"],
        queryFn: getPositions,
    });

    if (isLoading) return <div className="p-4 text-center text-gray-500">Loading positions...</div>;
    if (error) return <div className="p-4 text-center text-red-500">Error loading positions</div>;

    if (positions) return (
        <div className="flex flex-col gap-6 mt-8 w-full mx-auto">
            <h2 className="text-2xl font-bold text-gray-900">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {positions.map((position) => (
                    <PositionItem key={position.id} position={position} user={user} />
                ))}
            </div>
        </div>
    );
}
