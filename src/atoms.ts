import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

interface User {
  memberPk: string;
  memberName: string;
  memberId?: string;
}

export const UserData = atom<User>({
  key: "user",
  default: { memberName: "", memberPk: "", memberId: "" },
});

export const CheckPassword = atom<{ check: boolean }>({
  key: "checkPassword",
  default: { check: false },
});
