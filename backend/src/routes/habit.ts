// expressモジュールをインポートする
import express from "express";

// habitモデルをインポートする
import Habit from "../models/habit";

// Expressのルーターを作成する
const router = express.Router();

// 全ての習慣を取得するエンドポイント
router.get("/", async (req, res) => {
  try {
    const habits = await Habit.find({});
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 新しい習慣を作成するエンドポイント
router.post("/", async (req, res) => {
  try {
    const habit = new Habit(req.body);
    await habit.save();
   return res.status(201).json(habit);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// 指定したIDの習慣を取得するエンドポイント
router.get("/:id", async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) {
      res.status(404).json({ message: "習慣がありませんでした" });
    } else {
      res.json(habit);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 指定したIDの習慣を更新するエンドポイント
router.put("/:id", async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!habit) {
      res.status(404).json({ message: "習慣がありませんでした" });
    } else {
      res.json(habit);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 指定したIDの習慣を削除するエンドポイント
router.delete("/:id", async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id);
    if (!habit) {
      res.status(404).json({ message: "習慣がありませんでした" });
    } else {
      res.json({ message: "習慣を削除しました。" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ルーターをエクスポートする
export default router;
