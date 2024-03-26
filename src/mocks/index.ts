import { setupWorker } from "msw/browser";
import { bannerHandlers } from "./banner/bannerHandlers";
import { contentHandlers } from "./contents/contentHandlers";

export const worker = setupWorker(...contentHandlers, ...bannerHandlers);
