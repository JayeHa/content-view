import { HttpResponse, http } from "msw";

const testData = Array.from(Array(1024).keys()).map((id) => ({
  id,
  title: `Test Data ${id + 1}`,
}));

export const handlers = [
  http.get("/test", () => {
    return HttpResponse.json({ contents: testData }, { status: 200 });
  }),
];
