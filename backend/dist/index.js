"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
// 環境変数を読み込む
require("dotenv").config();
// ポート番号を設定する
const PORT = process.env.PORT || 3001;
// MongoDBの接続文字列を設定する
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/habit-app";
// Expressアプリケーションを作成する
const app = (0, express_1.default)();
// JSONボディパーサーを使用する
app.use(express_1.default.json());
// CORSを許可する
app.use((0, cors_1.default)());
// データベースに接続する
mongoose_1.default.connect(MONGO_URI, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useFindAndModify: false,
});
// 接続が成功したらメッセージを表示する
mongoose_1.default.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});
// 接続が失敗したらエラーを表示する
mongoose_1.default.connection.on("error", (err) => {
    console.error(err);
});
// 習慣のスキーマを定義する
const habitSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    frequency: { type: Number, required: true },
    unit: { type: String, required: true },
    goal: { type: Number, required: true },
    progress: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
// 習慣のモデルを作成する
const Habit = mongoose_1.default.model("Habit", habitSchema);
// APIのルーティングを設定する
app.get("/api/habits", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 全ての習慣を取得する
    try {
        const habits = yield Habit.find();
        res.json(habits);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.post("/api/habits", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 新しい習慣を作成する
    try {
        const habit = new Habit(req.body);
        yield habit.save();
        res.status(201).json(habit);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
app.get("/api/habits/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 指定したIDの習慣を取得する
    try {
        const habit = yield Habit.findById(req.params.id);
        if (!habit) {
            res.status(404).json({ message: "Habit not found" });
        }
        else {
            res.json(habit);
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
app.put("/api/habits/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 指定したIDの習慣を更新する
    try {
        const habit = yield Habit.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!habit) {
            res.status(404).json({ message: "Habit not found" });
        }
        else {
            res.json(habit);
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
app.delete("/api/habits/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 指定したIDの習慣を削除する
    try {
        const habit = yield Habit.findByIdAndDelete(req.params.id);
        if (!habit) {
            res.status(404).json({ message: "Habit not found" });
        }
        else {
            res.json({ message: "Habit deleted" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// サーバーを起動する
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
