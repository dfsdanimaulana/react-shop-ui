import { Announcement } from "../components/Announcement"
import { Navbar } from "../components/Navbar"
import { Slider } from "../components/Slider"

export const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
    </div>
  )
}
