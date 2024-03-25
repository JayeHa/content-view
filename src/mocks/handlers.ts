import { Content, DefaultContentData } from "@/models/contents";
import { WHOOK } from "@/models/contents/whook";
import { HttpResponse, http } from "msw";

// const testData = Array.from(Array(1024).keys()).map((id) => ({
//   id,
//   title: `Test Data ${id + 1}`,
// }));

const generateContents = (
  count: number,
  data: DefaultContentData
): Content[] => {
  return Array.from({ length: count }, (_, id) => ({
    ...data,
    id,
  }));
};

export const handlers = [
  http.get("/whook", () => {
    const CONTENT_AMOUNT = 10;

    const getRandomNumber = (index = 0) =>
      Math.round(Math.random() * 100) + index;

    const contents = generateContents(CONTENT_AMOUNT, WHOOK.DEFAULT_DATA).map(
      (v, i) => ({
        ...v,
        amount: getRandomNumber(i),
      })
    );

    return HttpResponse.json({ contents }, { status: 200 });
  }),
];
