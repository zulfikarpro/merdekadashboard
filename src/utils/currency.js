const currency = (string) =>{
    var formatter = new Intl.NumberFormat('ID', {
        style: 'currency',
        currency: 'IDR',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
      console.log(formatter.format(string))
      return formatter.format(string); /* $2,500.00 */
}



export default currency;