import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import videoRoasting from "@/assets/video-roasting.mp4";
import videoProcessing from "@/assets/video-processing.mp4";
import videoPlantation from "@/assets/video-plantation.mp4";

const videos = [
  {
    src: videoPlantation,
    title: "Our Coffee Plantations",
    description: "Walk through the lush coffee estates of India where our premium beans are carefully cultivated.",
  },
  {
    src: videoRoasting,
    title: "The Roasting Process",
    description: "Watch our master roasters transform green beans into perfectly roasted coffee.",
  },
  {
    src: videoProcessing,
    title: "Processing & Quality Control",
    description: "Every bean is meticulously sorted and graded to meet international export standards.",
  },
];

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (e: React.MouseEvent<HTMLDivElement>) => {
    const videoEl = e.currentTarget.querySelector("video");
    if (videoEl) {
      if (isPlaying) {
        videoEl.pause();
      } else {
        videoEl.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div
        className="relative rounded-lg overflow-hidden cursor-pointer aspect-video shadow-xl"
        onClick={handlePlay}
      >
        <video
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src={video.src} type="video/mp4" />
        </video>

        {/* Play overlay */}
        <div
          className={`absolute inset-0 bg-coffee-dark/40 flex items-center justify-center transition-opacity duration-300 ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/90 flex items-center justify-center shadow-gold transition-transform duration-300 group-hover:scale-110">
            <Play className="w-7 h-7 md:w-8 md:h-8 text-accent-foreground ml-1" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">{video.title}</h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{video.description}</p>
      </div>
    </motion.div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold">Experience</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Our Coffee <span className="text-gradient-gold">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
