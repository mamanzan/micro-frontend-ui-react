interface CardProps {
  component: JSX.Element;
  description: string;
  title: string;
}
export const Card = ({ component, description, title }: CardProps) => {
  return (
    <article className="card">
      <div className="card__body">{component}</div>
      <hr className="card__divider" />
      <h3 className="card__header">{title}</h3>
      <p className="card__description">{description}</p>
    </article>
  );
};
