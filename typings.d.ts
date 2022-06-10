export interface Splash extends SplashBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "splash";
  blockSplash: boolean;
}

export type SplashBody = {
  text: string;
  username: string;
  profileImg: string;
  image?: string;
};

export type CommentBody = {
  comment: string;
  splashId: string;
  username: string;
  profileImg: string;
};

export interface Comment extends CommentBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "comment";
  _updatedAt: string;
  splash: {
    _ref: string;
    _type: "reference";
  };
}
