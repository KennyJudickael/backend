import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET all subscriptions" });
});
subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET one subscription" });
});
subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new subscription" });
});
subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscription" });
});
subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE a subscription" });
});
subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET ALL subscriptions" });
});
subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL subscription" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GEL upcoming renewals" });
});
export default subscriptionRouter;
