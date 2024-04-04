import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

interface User {
  memberPk: string;
  memberName: string;
  memberId?: string;
  memberPassword: string;
}

export const UserData = atom<User>({
  key: "user",
  default: { memberName: "", memberPk: "", memberId: "", memberPassword: "" },
});
