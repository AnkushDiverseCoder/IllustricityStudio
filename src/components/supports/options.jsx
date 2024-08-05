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
        content="We provide innovative digital marketing services, including SEO, social media management, and content creation. Did you know our team has won awards for their creative campaign designs?"
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
        content="Illustricity will help you increase engagement, conversions, and brand awareness. Fun fact: Did you know that the first tweet was sent in 2006 by Jack Dorsey, the founder of Twitter?"
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
        content="Hi there! Illustricity is here to bring your brand to life with custom graphic design services, from logos to brochures."
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
        content="Our team of experts captures high-quality images that drive sales & tells stories, Did you know our photographers can even create 360-degree views?"
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
