import React from "react";

function Specifications({product}) {
  return (
    <div className="mt-8 border-t border-gray-200 pt-4">
      <h2 className="text-lg font-semibold">Product Specifications</h2>
      <table className="w-full mt-2 text-gray-700">
        <tbody>
          <tr>
            <td className="font-medium">Brand</td>
            <td>{product.brand}</td>
          </tr>
          <tr>
            <td className="font-medium">Material</td>
            <td>{product.material}</td>
          </tr>
          <tr>
            <td className="font-medium">Dimensions</td>
            <td>{product.dimensions}</td>
          </tr>
          {/* Add more specifications as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default Specifications;
