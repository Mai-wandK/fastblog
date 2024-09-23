export const plansMap = [
  {
    id: "basic",
    name: "Basic",
    description: "Get started with SpeakEasy!",
    price: "10",
    items: ["3 Blog Posts", "3 Transcription"],
    paymentLink: "https://buy.stripe.com/test_7sI6rT7rXgdP5La6op",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1PyUcF2KWJ0DPID9QyiykJ5q"
        : "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "All Blog Posts, let’s go!",
    price: "19.99",
    items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    paymentLink: "https://buy.stripe.com/test_3cs17z13zbXz8Xm002",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1PyUcF2KWJ0DPID9wSCfmITy"
        : "",
  },
];
