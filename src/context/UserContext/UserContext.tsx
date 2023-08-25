import { useState, useEffect, createContext } from "react";
import { UserContextTypes } from "./UserContext.type";
import { ENV } from "../../utils";
import { todo_logo } from "../../assets";

export const UserContext = createContext<UserContextTypes.Context>({
  username: "",
  avatar: "",
  onChangeUsername: () => {},
  onChangeAvatar: () => {},
});

export function UserProvider(props: UserContextTypes.Props) {
  const { children } = props;
  const [username, setUsername] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    const responseUsername = localStorage.getItem(ENV.LOCAL_STORAGE.USERNAME);
    setUsername(responseUsername || "Anonimo");
    const responseAvatar = localStorage.getItem(ENV.LOCAL_STORAGE.AVATAR);
    setAvatar(responseAvatar || todo_logo);
    }, []);

  const onChangeUsername = (username: string) => {
    localStorage.setItem(ENV.LOCAL_STORAGE.USERNAME, username);
    setUsername(username);
  }

  const onChangeAvatar = (avatar: string) => {
    localStorage.setItem(ENV.LOCAL_STORAGE.AVATAR, avatar);
    setAvatar(avatar);
    }

  const valueContext: UserContextTypes.Context = {
    username,
    avatar,
    onChangeUsername,
    onChangeAvatar,
  };

  return <UserContext.Provider value={valueContext}>{children}</UserContext.Provider>;
}
