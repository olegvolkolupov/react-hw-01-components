import React from "react";
import PropTypes from "prop-types";

export default function Transactions({type, amount, currency}) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

Transactions.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}