import { page } from "epact"

export default page({
  get(req, res) {
    res.json({
      message: "Hello Epact!"
    })
  }
})
