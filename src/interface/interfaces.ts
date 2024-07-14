export interface IState {
    activeBoard?: IBoard;
    boards?: IBoard[];
    masterData?: IMasterData;
}

export interface IMasterData {
    users?: IUser[];
    status?: string[];
    priority?: string[];
    labels?: string[];
}

export interface IBoard {
    id: string;
    name: string;
    slug: string;
    manager: IUser;
    columns: IColumn[];
    tickets: ITicket[];
}

export interface IColumn {
    id: string;
    boardId: string;
    name: string;
    slug: string;
    tickets: ITicket[];
}

export interface ITicket {
    id: string;
    columnId: string;
    title: string;
    description: string;
    assignee: IUser;
    status: string;
    storyPoint: number;
    labels: string[];
    priority: string;
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
}

export interface ICreateBoard {
    name: string;
    slug: string;
    manager: IUser;
    columns: string[];
}