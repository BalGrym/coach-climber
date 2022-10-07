exports.sayHello = (req, res, next) => {
  console.log("Hello from coach-climber app !");
  res.json({ message: "Hello from coach-climber app !" });
};
