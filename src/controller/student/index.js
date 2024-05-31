import StudentModel from "../../model/student/index.js";

const students = [
  {
    name: "Ali",
    class: "MR-16",
  },
  {
    name: "Hamza",
    class: "MR-15",
  },
];
const StudentController = {
  getAll: async (req, res) => {
    try {
      const students = await StudentModel.findAll({
        // where: {
        //   firstName: "Ali",
        // },
        // order: [["createdAt", "DESC"]],
        // limit: 5,
      });

      res.json({
        data: students,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;

      const student = await StudentModel.findByPk(id);
      // await StudentModel.findOne({
      //   where: {
      //     id,
      //   },
      // });

      // const student = students.find((ele) => ele.name == name);
      if (!student) {
        return res.status(404).json({ message: "No student with this name" });
      }
      res.status(200).json({ data: student });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  create: async (req, res) => {
    try {
      const payload = req.body;

      console.log(payload, "payload");

      // const student = await StudentModel.create({
      //   firstName: payload.firstName,
      //   lastName: payload.lastName,
      //   phone: payload.phone,
      // });

      const student = new StudentModel();
      student.firstName = payload.firstName;
      student.lastName = payload.lastName;
      student.phone = payload.phone;

      await student.save();

      res.status(200).json({ message: "Student created", student });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  update: (req, res) => {
    try {
      const { name } = req.params;
      const payload = req.body;

      const studentIndex = students.findIndex((ele) => ele.name == name);
      if (studentIndex == -1) {
        return res.status(404).json({ message: "No student with this name" });
      }

      if (payload.name) {
        students[studentIndex].name = payload.name;
      }

      if (payload.class) {
        students[studentIndex].class = payload.class;
      }

      // students[studentIndex].name = payload.name
      //   ? payload.name
      //   : students[studentIndex].name;
      // students[studentIndex].class = payload.class
      //   ? payload.class
      //   : students[studentIndex].class;

      res.status(200).json({ message: "Student Updated", students });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  delete: (req, res) => {
    try {
      const { name } = req.params;

      const studentIndex = students.findIndex((ele) => ele.name == name);
      if (studentIndex == -1) {
        return res.status(404).json({ message: "No student with this name" });
      }
      students.splice(studentIndex, 1);
      res.status(200).json({ message: "Student Deleted" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default StudentController;
