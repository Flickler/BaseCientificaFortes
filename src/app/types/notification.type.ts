export type Notification = {
  description: string;
  type: NoteStatus;
};

export type NoteStatus = 'info' | 'warn' | 'sucess';
