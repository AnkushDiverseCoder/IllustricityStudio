import Image from "next/image";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { BsFillCursorFill } from "react-icons/bs";
import {
  FiAlignLeft,
  FiAnchor,
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiEdit,
  FiEye,
  FiItalic,
} from "react-icons/fi";

const IssuesComponent = () => {
  return (
    <div className="h-full w-full p-4">
      <Image
          src="/show/show2.png"
          alt="Placeholder"
          layout="fill"
          className="w-full h-full object-contain rounded-xl"  
      />
    </div>
  );
};

const KanbanComponent = () => {
  return (
    <div className="h-full w-full p-4">
      <Image
          src="/show/show3.png"
          alt="Placeholder"
          layout="fill"
          className="w-full h-full object-contain rounded-xl"  
      />
    </div>
  );
};

const BGTask = () => {
  return (
    <div className="w-full rounded-lg bg-white p-4 text-[0.5rem] text-zinc-400 shadow blur-[1px] sm:text-xs">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  );
};

const OverlayTask = () => {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 w-64 -translate-x-1/2 -translate-y-1/2 rotate-3 rounded-lg border-2 border-indigo-600 bg-white p-4 shadow-xl shadow-indigo-600/20">
      <div className="mb-2 flex items-center gap-1.5 text-xs">
        <span className="text-zinc-600">Design Team</span>
        <FiChevronRight />
        <div className="flex items-center gap-1 rounded bg-indigo-100 px-1.5 py-0.5 text-indigo-900">
          <FiAnchor />
          <span>Features</span>
        </div>
      </div>
      <span className="mb-0.5 block text-lg font-medium">
        Launch landing page
      </span>
      <span className="block text-sm text-zinc-600">December 4th, 2023</span>
    </div>
  );
};

const GanttComponent = () => {
  return (
    <div className="h-full w-full p-4">
      <Image
          src="/show/show4.png"
          alt="Placeholder"
          layout="fill"
          className="w-full h-full object-contain rounded-xl"  
      />
      </div>
  );
};

const DocumentationComponent = () => {
  return (
    <div className="h-full w-full p-4">
      <Image
          src="/show/show5.png"
          alt="Placeholder"
          layout="fill"
          className="w-full h-full object-contain rounded-xl"  
      />
      </div>
  );
};

export const data = [
  {
    id: 1,
    title: "Social Media Management",
    Component: IssuesComponent,
    cardTitle: "Title for Issues feature",
    cardSubtitle:
      "Explain what the Issues feature does and why it's different or better than your competitors.",
  },
  {
    id: 2,
    title: "Digital Marketing",
    Component: KanbanComponent,
    cardTitle: "Title for Kanban feature",
    cardSubtitle:
      "Explain what the Kanban feature does and why it's different or better than your competitors.",
  },
  {
    id: 3,
    title: "Graphic Desiging",
    Component: GanttComponent,
    cardTitle: "Title for Gantt feature",
    cardSubtitle:
      "Explain what the Gantt feature and why it's different or better than your competitors.",
  },
  {
    id: 4,
    title: "Product Photography",
    Component: DocumentationComponent,
    cardTitle: "Title for Documentation feature",
    cardSubtitle:
      "Explain what the Documentation feature and why it's different or better than your competitors.",
  },
];
