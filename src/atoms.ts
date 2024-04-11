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

interface Review {
  data: {
    comment_pk: string;
    member_pk: number;
    comment_title: string;
    comment_content: string;
    level: string;
    created_date: string;
    modified_date: string;
    isDeleted: number;
    total_like: string;
    total_report: string;
    parent_pk: string;
    book_pk: string;
    my_library_pk: string;
  };
}

export const UserData = atom<User>({
  key: "user",
  default: { memberName: "", memberPk: "", memberId: "", memberPassword: "" },
});
