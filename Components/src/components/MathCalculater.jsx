function MathCalculator() {
    const num1 = 10;
    const num2 =20;

return (
    <div>
        <p> {num1}+ {num2}= {num1+num2}</p>
         <p> {num1} / {num2}= {(num1/num2).toFixed(2)}</p>
    </div>
  );

}