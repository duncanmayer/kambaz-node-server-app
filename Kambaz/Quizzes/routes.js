import * as quizzesDao from "./dao.js";
export default function QuizRoutes(app) {
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });
  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    await quizzesDao.updateQuiz(quizId, quizUpdates);

    // Fetch the updated quiz
    const updatedQuiz = await quizzesDao.findQuizById(quizId);

    res.send(updatedQuiz);
  });
}
