
  console.log('This is Javascript')

 let single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
 let double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen','Seventeen', 'Eighteen', 'Nineteen']
 let below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

function convertNumberToWords(number) {
   word = ""
  if (number == 0){
        return " ";
  } else if (number < 0){
        return "minus" + convertNumberToWords(Math.abs(number))

  }else if (number < 10){
        word = single_digit[number] + ' '
  }else if (number < 20){
        word = double_digit[number - 10] + ' '
  }else if (number < 100){
        rem = convertNumberToWords(number % 10)
        word = below_hundred[(number - number % 10) / 10 - 2] + ' ' + rem
  }else if (number < 1000){
        word = single_digit[Math.trunc(number / 100)] + ' Hundred ' + convertNumberToWords(number % 100)
  }else if (number < 1000000){
        word = convertNumberToWords(parseInt(number / 1000)).trim() + ' Thousand ' + convertNumberToWords(number % 1000)
  }else if (number < 1000000000){
        word = convertNumberToWords(parseInt(number / 1000000)).trim() + ' Million ' + convertNumberToWords(number % 1000000)
  }else if (number < 1000000000000){
        word = convertNumberToWords(parseInt(number / 1000000000)).trim() + " Billion " + convertNumberToWords(number % 1000000000)
  }else {
        word = "Figure very Large"
        }
        return word
  };



//        get the values of height for grp tanks
//        let h1 = document.getElementById("height_1m").value
//        let h2 = document.getElementById("height_2m").value
//        let h3 = document.getElementById("height_3m").value
//        let h4 = document.getElementById("height_4m").value

 // from Javascript
        // let's make some fields of the input edit form to be disabled
        // We don't want the id, admin_id and status_ to be changed during editing

     $(document).ready(function(){
        let transport = document.getElementsByClassName("transportVal")[0].value
        console.log("This is for transport",transport)
        let unitPrice = document.getElementById("unitPrice").value
        let vatPercent = document.getElementById("vat_").value
        let tankType = document.getElementById("getTankType").innerText;
        let height = document.getElementById("height").innerText;
        let currencyCode = document.getElementById("code").value;
        let desc = document.getElementById('param_desc').value;
        let second_desc = document.getElementById('second_desc').value;
        let height_2 = document.getElementById('height_2').value;

////        for preferred dimension
//        let height_p = document.getElementById('height_p').value;
//        let length_p = document.getElementById('length_p').value;
//        let breadth_p= document.getElementById('breadth_p').value;
//        let vol_p = document.getElementById('vol_p').value;
//          let n_panels_p = document.getElementById('n_panels_p').value;

        let noteOnTransport = ""
        //let numberOfPanel = priceOfPanel / unitPrice;
        let unitPriceOfPanel
        let converter
        let numberOfPanel = document.getElementById("bestDimension").value  //get the best dimension
        // console.log('This is the value for the number of pane', numberOfPanel)
        let amountOfPanel = document.getElementById("amount").innerText = numberOfPanel * unitPrice
        let priceOfPanel = document.getElementById("price").innerText = numberOfPanel * unitPrice
        // let amountOfInstallation = document.getElementById("installAmount_p").innerText;

        // for preferred dimension
//        let amountOfPanel_p = document.getElementById("amount").innerText = n_panels_p * unitPrice
//        let priceOfPanel_p = document.getElementById("price").innerText = n_panels_p * unitPrice


//        get installation price
        let installationPriceGrp = document.getElementById("installPriceGrp").value;
        let installationPriceSteel = document.getElementById("installPriceStl").value;
        console.log('This is for steel', installationPriceSteel)
        console.log('This is for grp',installationPriceGrp)

        if (transport == null || transport == 0 ){
            //transport = 0
            noteOnTransport = "NOTE: Quote excludes plumbing pipes, stanchion for elevated tank, concrete plinth for ground tank and transportation"
            //console.log(transport)
        }else {

            noteOnTransport = "NOTE: Quote excludes plumbing pipes, stanchion for elevated tank and concrete plinth for ground tank"
            console.log('value of transport')
            //console.log(transport)
        }

        if (tankType == "Steel") {
            console.log("I am using Steel ")
            amount = parseInt(unitPrice) * parseInt(numberOfPanel)
            console.log(amount)
            price = parseInt(unitPrice) * parseInt(numberOfPanel)
            amountOfInstallation = parseInt(installationPriceSteel) * parseInt(numberOfPanel)

            // for preferred dimension
//            amountOfInstallation_p = parseInt(installationPriceSteel) * parseInt(n_panels_p)

            // console.log("This is amount of installation", amountOfInstallation)
            document.getElementById("price").innerHTML = price.toLocaleString("en-US")
            document.getElementById("amount").innerHTML = amount.toLocaleString("en-US")
            document.getElementById("installPrice").innerHTML = amountOfInstallation.toLocaleString("en-US")
            document.getElementById("installAmount").innerHTML = amountOfInstallation.toLocaleString("en-US")

            //for preferred dimension
//            document.getElementById("installPrice_p").innerHTML = amountOfInstallation_p.toLocaleString("en-US")
//            document.getElementById("installAmount_p").innerHTML = amountOfInstallation_p.toLocaleString("en-US")
//            document.getElementById("price").innerHTML = priceOfPanel_p.toLocaleString("en-US")
//            document.getElementById("amount").innerHTML = amountOfPanel_p.toLocaleString("en-US")

            document.getElementById("desc").innerHTML = desc
                        //        when the button for alternative parameter is clicked
            $('#alt_param').click(function(){
                console.log("I am being clicked")
                document.getElementById("desc").innerHTML = second_desc;
                document.getElementById("height").innerHTML = height_2;
                alert("The alternative parameter has been used as requested")
            })

            let subTotal = amountOfInstallation + parseInt(amountOfPanel) + parseInt(transport) ;
            console.log(subTotal)
            let subTotal2 = amountOfInstallation + parseInt(amountOfPanel) + parseInt(transport);
            document.getElementById("subtotal").innerHTML = subTotal.toLocaleString("en-US");

            // for preferred dimension
//            let subTotal_p = amountOfInstallation_p + parseInt(amountOfPanel_p) + parseInt(transport) ;
//            console.log(subTotal_P)
//            let subTotal_p2 = amountOfInstallation_p + parseInt(amountOfPanel_p) + parseInt(transport);
//            document.getElementById("subtotal_p").innerHTML = subTotal_p.toLocaleString("en-US");

            let vat = vatPercent * parseInt(subTotal);
            let vat2 = vatPercent * parseInt(subTotal);
//            console.log(vat)
//            console.log(vat2)
            document.getElementById("vat").innerHTML = vat.toLocaleString("en-US");

//            // for preferred dimension
//            let vat_p = vatPercent * parseInt(subTotal_p);
//            let vat2_p = vatPercent * parseInt(subTotal_p);
//            document.getElementById("vat_p").innerHTML = vat.toLocaleString("en-US");

            let total = vat2 + subTotal2;
            document.getElementById("total").innerHTML = total.toLocaleString("en-US");

//            // for preferred dimension
//            let total_p = vat2_p + subTotal_p2;
//            document.getElementById("total_p").innerHTML = total.toLocaleString("en-US");

            document.getElementById("word").innerHTML = "Total amount in words: " + convertNumberToWords(Math.ceil(total)) + " " + currencyCode;
            // for preferred dimension
           // document.getElementById("word_p").innerHTML = "Total amount in words: " + convertNumberToWords(Math.ceil(total_p)) + " " + currencyCode;

            document.getElementById("note").innerHTML = noteOnTransport;
            document.getElementById("transport").innerHTML = transport.toLocaleString("en-US");
            console.log(convertNumberToWords(total));


        } else {
                 let unitPrice = document.getElementById("unitPrice").value
                 let vatPercent = document.getElementById("vat_").value

                let h1 = document.getElementById("height_1m").value
                let h2 = document.getElementById("height_2m").value
                let h3 = document.getElementById("height_3m").value
                let h4 = document.getElementById("height_4m").value

               console.log("I am using GRP")
               if (height == 1) {
                    unitPriceOfPanel = numberOfPanel * h1
               } else if (height == 2) {
                    unitPriceOfPanel = numberOfPanel * h2
               } else if (height == 3) {
                    unitPriceOfPanel = numberOfPanel * h3
               } else {
                    unitPriceOfPanel = numberOfPanel * h4
               }
               // use .toLocaleString("en-US") for thousand seperator

               amountOfInstallation = parseInt(installationPriceGrp) * parseInt(numberOfPanel)
               document.getElementById("installPrice").innerHTML = amountOfInstallation.toLocaleString("en-US")
               document.getElementById("installAmount").innerHTML = amountOfInstallation.toLocaleString("en-US")
               document.getElementById("price").innerHTML = Math.ceil(unitPriceOfPanel).toLocaleString("en-US")
               amountPrice = unitPriceOfPanel * 1
               document.getElementById("amount").innerHTML = amountPrice.toLocaleString("en-US")
               document.getElementById("desc").innerHTML = desc

               let subTotal = amountOfInstallation + parseInt(amountPrice) + parseInt(transport);
               let subTotal2 = amountOfInstallation + parseInt(amountPrice) + parseInt(transport);
               document.getElementById("subtotal").innerHTML = subTotal.toLocaleString("en-US");

               let vat = vatPercent * parseInt(subTotal);
               let vat2 = vatPercent * parseInt(subTotal);
               document.getElementById("vat").innerHTML = vat.toLocaleString("en-US");

               let total = vat2 + subTotal2;
               document.getElementById("total").innerHTML = total.toLocaleString("en-US");
               document.getElementById("word").innerHTML = "Total amount in words: " + convertNumberToWords(Math.ceil(total)) + " " + currencyCode ;
               document.getElementById("note").innerHTML = noteOnTransport;
               document.getElementById("transport").innerHTML = transport.toLocaleString("en-US");
        }
})

    $(document).ready(function(){
           console.log("I am alive")
                document.querySelector("p > input#id").setAttribute('disabled', 'disabled')
                document.querySelector("p > input#admin_id").setAttribute('disabled', 'disabled')
                document.querySelector("p > input#status_").setAttribute('disabled', 'disabled')
                document.querySelector("p > input#quote_country").setAttribute('disabled', 'disabled')
})


    $(document).ready(function(){
        $('#btnPrintQuote').click(function(){
        alert("Your Quotation will download after a while. \n Check your download directory ")
        html2canvas(document.querySelector('#content')).then((canvas) => {
            let base64Image = canvas.toDataURL('image/png');
            let pdf = new jsPDF('p', 'px', [600, 550])
            pdf.addImage(base64Image, 'PNG', 20, 25, 500, 500)
            pdf.setFontSize(45)
            pdf.save('quotation.pdf')
        });
    });
});






