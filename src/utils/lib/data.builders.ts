import { Comment } from "./services/types";

export class DataBuilders {
  private static _generateID(): number {
    return Math.floor(Math.random() * 1000);
  }

  private static _generateEmail(): string {
    const randomEmail = Math.random().toString(36).substring(7);
    return `${randomEmail}@gmail.com`;
  }

  private static _generateName(): string {
    const randomName = Math.random().toString(36).substring(7);
    return `${randomName}`;
  }

  static generateNewPostComment(body: string, postId: number): Comment {
    return {
      body,
      postId,
      name: this._generateName(),
      id: this._generateID(),
      email: this._generateEmail(),
    };
  }
}
