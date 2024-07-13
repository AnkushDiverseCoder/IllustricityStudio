import { MotionConfig, motion } from "framer-motion";

const Testimonial = ({ imgSrc, name, title, company, content }) => (
  <MotionConfig
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
  >
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: -8,
      }}
      exit={{
        y: 0,
      }}
      className="w-full overflow-hidden rounded-lg border-2 border-zinc-900 bg-white p-8 md:p-12"
    >
      <div className="mb-6 flex items-center gap-6">
        <div className="rounded-lg bg-zinc-900">
          <motion.img
            initial={{
              rotate: "0deg",
              opacity: 0,
            }}
            animate={{
              rotate: "3deg",
              opacity: 1,
            }}
            exit={{
              rotate: "0deg",
              opacity: 0,
            }}
            src={imgSrc}
            alt="avatar"
            className="size-32 rounded-lg border-2 border-zinc-900 bg-indigo-200"
          />
        </div>
        <motion.div
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -12,
            opacity: 0,
          }}
        >
          <span className="mb-1.5 block text-3xl font-medium">{name}</span>
          <span className="text-indigo-600">
            @Illustricity
          </span>
        </motion.div>
      </div>
      <motion.p
        initial={{
          y: 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -12,
          opacity: 0,
        }}
        className="text-xl leading-relaxed"
      >
        {content}
      </motion.p>
    </motion.div>
  </MotionConfig>
);

export const OPTIONS = [
  {
    title: "Digital Marketing",
    Content: () => (
      <Testimonial
        imgSrc="/services/dg.jpg"
        name="Digital Marketing"
        content="Illustricity boosts your brand with tailored digital marketing services, including SEO, social media management, content creation, and performance analytics. Elevate your online presence and achieve growth with us!"
      />
    ),
  },
  {
    title: "Web Designing",
    Content: () => (
      <Testimonial
        imgSrc="/services/wd.jpg"
        name="Web Designing"
        content="Illustricity boosts your brand with tailored digital Presence by including UI/UX, Unlimited Edits, Dynamic Website, and Crazy Performance With Domain/Hosting. Elevate your online presence and achieve growth with us!"
      />
    ),
  },
  {
    title: "Social Media Management ",
    Content: () => (
      <Testimonial
        imgSrc="/services/smm.jpg"
        name="Social Media Management"
        title="Writer"
        content="Illustricity enhances your brand with creative social media management, engaging content, and performance analysis, ensuring your online presence shines and drives growth. Electrify your social media with us!"
      />
    ),
  },
  {
    title: "Graphic Designing",
    Content: () => (
      <Testimonial
        imgSrc="/services/gd.jpg"
        name="Graphic Designing"
        title="Author"
        company="Books About Things"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis qui fuga, deserunt doloribus, vero autem libero sed dolorum nostrum quidem in soluta magni eos excepturi."
      />
    ),
  },
  {
    title: "Video Editing",
    Content: () => (
      <Testimonial
        imgSrc="/services/vd.jpg"
        name="Video Editing"
        content="Illustricity offers expert video editing services, transforming raw footage into captivating visuals. Enhance your brand with our creative edits, ensuring engaging content that resonates and drives audience growth."
      />
    ),
  },
  {
    title: "Logo Animation",
    Content: () => (
      <Testimonial
        imgSrc="/services/la.jpg"
        name="Logo Animation"
        content="Illustricity creates unique, impactful logos that capture your brand's essence. Our expert designers ensure your logo stands out and leaves a lasting impression. Elevate your brand with Illustricity!"
      />
    ),
  },
  {
    title: "SEO",
    Content: () => (
      <Testimonial
        imgSrc="/services/seo.jpg"
        name="Search Engine Optimization"
        content="Illustricity boosts your online visibility with expert SEO services, optimizing your website to rank higher in search results, attract more traffic, and drive business growth. Elevate your digital presence with us!"
      />
    ),
  },
  {
    title: "Product Photography",
    Content: () => (
      <Testimonial
        imgSrc="/services/pp.jpg"
        name="Product Photography"
        content="Illustricity offers exceptional product photography services, capturing stunning visuals that highlight your products’ best features. Enhance your brand’s appeal and drive sales with our professional photography."
      />
    ),
  },
  {
    title: "Content Creation",
    Content: () => (
      <Testimonial
        imgSrc="/services/cc.jpg"
        name="Content Creation"
        content="Illustricity offers top-notch content creation services, crafting engaging and creative content that elevates your brand, boosts engagement, and drives growth. Transform your online presence with our expertise."
      />
    ),
  },
];
