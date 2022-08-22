import type { ProjectCard, WorkCard } from "../cards";
import Tag from "../components/Tag";

export interface Props {
  card: WorkCard | ProjectCard;
}

export default function Card({ card }: Props) {
  const { title, description, tags } = card;

  let subtitle = null;
  if (card.type === "work") {
    subtitle = `${card.company} • ${card.startDate} - ${card.endDate}`;
  }

  return (
    <div className="bg-gray-600 rounded-xl p-4 shadow-2xl">
      <h4 className="text-xl text-gray-200 font-medium">{title}</h4>
      <h5 className="text-sm text-gray-200 font-light mb-4">{subtitle}</h5>
      <p className="text-base text-gray-200">{description}</p>
      <div className="flex flex-wrap mt-4 gap-2">
        {tags.map((tag) => (
          <Tag key={card.title + tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
