export interface User {
    uuid: string;
    candidateId: string;
    applicationId: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface Position {
    id: string;
    title: string;
}

export interface ApplicationPayload {
    uuid: User['uuid'];
    candidateId: User['candidateId'];
    applicationId: User['applicationId'];
    jobId: Position['id'];
    repoUrl: string;
}