import React from "react";

const CardSummary = (props) => {
  return (
    <div className={"card-summary " + props.cardSummaryClasses}>
      <div className={"card-summary-title center " + props.titleClasses}>
        {props.title}
      </div>
      <div
        className={
          "card-summary-description center " + props.descriptionClasses
        }
      >
        {props.description}
      </div>
      {props.last && (
        <div className={"card-summary-footer center " + props.footerClasses}>
          <span>last:</span>
          <span className='text-blue-dark'>{props.last}</span>
        </div>
      )}
    </div>
  );
};

export default CardSummary;
