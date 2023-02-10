const f = document.getElementById("data");
function printDocument() {
    const backup = document.body.innerHTML;
    document.body.innerHTML = `<main>${document.querySelector("main").innerHTML}</main>`;
    window.print();
}
f.addEventListener('submit', (e) => {
    e.preventDefault();
    const ab = document.getElementById("browser").value;
    const name = document.getElementById('name').value;
    const add = document.getElementById("address").value;
    const feet = document.getElementById("feet").value;
    const rate3 = document.getElementById('rate3').value;
    document.title=ab+''+name+' Giant 3 Layer Quote';
    const date = new Date();
    const print = document.createElement('button');
    print.classList.add('button');
    print.textContent = 'print';
    const btnsection = document.querySelector('.btn');
    btnsection.innerHTML = "";
    btnsection.appendChild(print);
    print.addEventListener('click', printDocument);
    document.querySelector("main").innerHTML = `
    <div class="logo"><img src="logo.png" alt=""></div>
<h2 class="company-name">
Giant Waterproofing Company
</h2>
<div class="reg-date">
    <div class="reg-num">GWC/R/32446/2023</div>
    <div class="date"><span class="dd">${(date.getDate() < 10) ? '0' + date.getDate() : date.getDate()}</span>.<span class="mm">${((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}</span>.<span class="yyyy">${date.getFullYear()}</span></div>
</div>
<div class="name-add">
    <h3 class="name">${ab + ' ' + name}</h2>
    <h3 class="address">${add}</h2>
</div>
<h4 class="title">Re: Waterprofing on Roof</h2>
<h4 class="salutation">Dear sir,</h2>
<p class="msg">
<p style="margin-top:20px;">
    We thank you very much for your kind inquiry for waterproofing on Roof area. <strong>Giant</strong> is a leading waterproofing expert assuring the right waterproofing solutions for <strong>leak-free homes </strong>
    with the best waterproofing <strong>services in India</strong>.
</p>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #00a2ff;
  text-align: left;
  padding: 15px;
}

tr:nth-child(even) {
  background-color: #00a2ff;
}

</style>



&nbsp;
<center><h3>Waterproofing Services with Rate</h3></center>

<table>
  <tr>
    <th>Description</th>
    <th>Sqft × rate</th>
    <th>Amount </th>
  </tr>
  <tr>
    <td><h2>3 Layer Working</h2>
  <b>	(3 Year Warranty)<b>	</td>
    <td><b><span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate3} </span><b></td>
    <td><b><span class="total"><h2>&#x20B9;${feet * rate3 * 118 / 100}</span></h2><b>
(18 % GST Including)</td>
  </tr>

  
</table>








<p style="margin-top:20px;">
    <strong> Giant’s Layer Waterproofing treatment </strong>is a Waterproofing technique designed and
    developed for a
    complete <strong>waterproofing solution with leakage free warranty for years.</strong> This system
    can be applied for
    Waterproofing on RCC surfaces, Side Walls, Asbestos sheets, Tin Sheets, Water Tanks etc
</p>
<h3 style="margin-top:20px; text-decoration: underline;
">Description of Chemicals:</h3>
<dl class="chem-des">
    <ol>

        <li>
            <dt>
                RainPrime :
            </dt>
            <dd><strong>RainPrime is an acrylic co-polymer emulsion supplied as a ready to use bonding agent</strong> with superior wet adhesion and universal compatibility. It is also a versatile latex that can be used as a cement modifier for spalled concrete slabs, overhangs, beams, columns and floors. It is also used as a bonding primer and porosity filler with RainSiller during waterproofing applications.</dd>
        </li>

        <li>
            <dt>
                SafeCoat:
            </dt>
            <dd>
                <strong>Giant Elastomeric is a high performance elastomeric membrane for crack bridging.</strong> 
                It features curing through crosslinking and is highly UV durable. 
                It features ability to elongate upto 250 percent. 
                It can be used on variety of substrates as a mortar mix with sand and cement.
            </dd>
        </li>
    </ol>
</dl>
</p>
</p>
<h2 class="procedure">Waterproofing with Procedure (3 layer)</h2>
<p class="description">
<ol style="margin-left: 50px; line-height:1.8rem; font-weight:600; font-style:italic;">
    <li>Clean the surface by rubbing with wire brush & other mechanical tools to remove dust, and other
        loose materials. Repairing of Cracks work will be carried out as per requirement on Roof.</li>
    <li>Apply 1st Coating Giant RainPrime with cement.</li>
    <li>Apply 2nd & 3rd coating of Giant SafeCoat with dilution.</li>
    
</ol>
</p>
<h2 class="area-detail-heading">Area Details Provided By Candidate</h2>
<p class="area-details">
    Working area <strong class="area"> ${feet} </strong>Sq fit. (approx.) of treated place should be calculated as per actual or as per site in charge direction.
</p>
<h2 class="Rate-heading">Rate:</h2>
<p class="Rate-details">
    Rs <strong class="rate">${rate3}</strong> per sq fit.(Rates are inclusive Chemicals, mechanical tools, Labor, & Supervision etc)
</p>
<h2 class="total-amount" style="border: 1px solid blue; display:inline-block; padding: 10px;">Total Amount: <span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate3} </span>=<span class="total">&#x20B9;${feet * rate3 * 118 / 100} Cost of 3 layer waterproofing</span></h2>


<h3 style="color: red; margin: 50px 0; ">Note:</h3>
<p style="border:1px solid red; padding:15px;">Cement must be provided by customer as per requirement</p>
<p style="border:1px solid red; padding:15px;">All details provided by candidate via tele-communication is considered in this document. If any changes found while measuring area on site, then that area will be considered in contract and amount will changed accordingly.</p>
<h3 style="margin-top: 40px; text-align:center;">Product for Terrace Waterproofing
    Area <span class="total">${feet}</span>.ft (Approx.)
</h3>
<table border="1">
    <thead>
        <tr>
            <td>S.No</td>
            <td><strong>Product</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td><strong>RainPrime</strong></td>
        </tr>
        <tr>
            <td>2</td>
            <td><strong>SafeCoat</strong></td>
        </tr>
        <tr>
            <td>3</td>
            <td><strong>Cement</strong></td>
        </tr>
    </tbody>
</table>
<div class="t-and-d">


</li>
            </ol>
            <h4 style="border:1px solid blue; padding: 20px; margin-top:20px;">Warranty : 3 Years (Three Years) (for 3 Layer Waterproofing Service ) <b>T&C Apply</b>
                </h4>







    <h2>Terms and Conditions</h2>
    <p>
        <dl>
            <ol>
                <li>
                    <dt>Taxes:</dt>
                    <dd><strong>18 % GST Including.</strong></dd>
                </li>
                <li>
                    <dt>Payment Terms:</dt>
                    <dd>Work to commence against firm work order along with <strong>90 % Advance</strong>  along with work order. A balance payment of 10% is to be made immediately upon completion of work.</dd>
                </li>
                <li>
                    <dt>Transport Fee Extra</dt>
                    <dd></dd>
                </li>
                <li>
                    <dt>Validity:</dt>
                    <dd>Our quotation is valid for a period of 12 days from this date and validitythereof is subject our final confirmation.</dd>
                </li>
                <li>
                    <dt>General:</dt>
                    <dd>We need your co-operation to provide us safe space for storing our materials,during the work.</dd>
                </li>
                <li>
                    <dt>Kindly note that the actual measurement will be in line with the Industrial standards.</dt>
                    <dd>The above work shall be completed as per schedule mutually discussedand agreed, to avoid inconvenience place the order well in advance.</dd>
                </li>
                <li>
                    <dt>Completion:</dt>
                    <dd>
                        The above work shall be completed as per schedule mutually discussedand agreed, to avoid inconvenience place the order well in advance.
                        <ol>
                            <li>
                                The work order and advance must be allowed 15 working Days prior to the date of commencement of work. To arrange the materials and utilities.
                            </li>

                            <li>
                                Kindly ensure the work area to be available on time so that our workmen’s idle and other inconvenience in service can be avoided.
                            </li>
                        </ol>
                    </dd>
                </li>
                <li>
                    <dt>Water and Electricity:</dt>
                    <dd>Necessary construction water and power required forexecution of our work should be provided free of cost by you.</dd>
                
            
        </dl>
    </p>
    <div class="company-details">
        <h2>Bank Account Details[HDFC Bank]</h2>
        <h3>Name: Giant WaterProofing Co.</h3>
        <h3>A/C No: 50200069668033</h3>
        <h3>IFSC Code: HDFC0005386</h3>
    </div>
    <div class="qr-code">
        <img src="qr.jpg" alt="">
    </div>
    <div class="contact">
        <h3>Contact US</h3>
        <p class="contact-details">
            Name: <b><span class="name">Giant Care Team</span></b>
            Mobile: <b><span class="mobile">+917470612116</span></b>
            Email: <b><span class="email">info@giantwaterproofing.in</span></b>
            Website: <b><span class="website">www.giantwaterproofing.in</span></b>
        </p>
    </div>
    <div class="footer">
       
    </div></div>
    `;
});
