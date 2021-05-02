import firebase from 'firebase/app';

export class User {
    emailId: string;

    isAdmin: boolean;

    constructor(emailId: string, isAdmin: boolean) {
        this.emailId = emailId;
        this.isAdmin = isAdmin;
    }
}

export const UserConverter = {
    toFirestore(user: User): object {
        return {
            emailId: user.emailId,
            isAdmin: user.isAdmin
        };
    },
    fromFirestore(
        snapshot: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>,
        options: firebase.firestore.SnapshotOptions
    ): User {
        const data = snapshot.data(options);
        return new User(data.email_id, data.isAdmin);
    }
};
