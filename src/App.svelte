<script>
	let dropDown_Value;
	let textvalue="Text";
	let clicked;
	let click;
	let list = [];
	let lastId = 0;
	let currentAdd='';
	let col_value=17;
	let row_value=5;
	let default_text;

	const handleAdd = (data) => {
		clicked=true;
		if (currentAdd === '') return;
		list = [...list, {
			id: lastId++,
			dropvalue_first:dropDown_Value,
			inputvalue_first: currentAdd,
			dropvalue_second: textvalue,
			default:default_text
		}];
		currentAdd=currentAdd;
	};

	function change(){
		currentAdd='';
		var area=document.getElementById("text_correct");
		var cols=document.getElementById("col_btn");
		var total=area.clientWidth;
		cols.style.width=(total+3)+"px";
	}

	function myFunction(value){
		var inp_type=document.getElementsByTagName("INPUT")[0];
		if(textvalue=value){
			inp_type.setAttribute("type",value.toLowerCase());
		}
		if(textvalue=="Number"){
			inp_type.setAttribute("max","20");
			inp_type.setAttribute("min","0");
		}
	}

	function rowinc(){
		row_value+=1;
		var area=document.getElementById("text_correct");
		var rows=document.getElementById("row_btn");
		var rows_value=area.clientHeight;
		rows.style.height=(rows_value+23)+"px";
	}

	function rowdec(){
		row_value-=1;
		var area=document.getElementById("text_correct");
		var rows=document.getElementById("row_btn");
		var rows_value=area.clientHeight;
		rows.style.height=(rows_value-23)+"px";
	}

	function coldec(){
		col_value-=1;
		var area=document.getElementById("text_correct");
		var cols=document.getElementById("col_btn");
		var cols_value=area.clientWidth;
		cols.style.width=cols_value/16.5+"em";
	}

	function colinc(){
		col_value+=1;
		var area=document.getElementById("text_correct");
		var cols=document.getElementById("col_btn");
		var cols_value=area.clientWidth;
		cols.style.width=cols_value/15+"em";
	}
</script>
<div class="container d-flex flex-column justify-content-start border border-dark w-50 mw-50 mh-50vw h-50vw px-0 py-0">
	<div class="bg-white clearfix border border-dark border-top-0 border-start-0 border-end-0">
		<select bind:value={dropDown_Value} on:mouseleave={change} class="mx-3 my-2 form-select form-select-sm w-50 d-inline-flex" aria-label="selectValues">
			<option selected>Text</option>
			<option value="Drop Down">Drop Down</option>
			<option value="Drag and Drop">Drag and Drop</option>
			<option value="Multiple Line">Multiple Line</option>
			<option value="Math Equation">Math Equation</option>
		</select>
		<button type="button" id="close_btn" name="close_btn" class="btn px-2 mx-2 py-1 my-1 bg-white float-end my-0">&#10005;</button>
	</div>
	<!-- If Select value is Text -->
	{#if dropDown_Value=="Text"}                              
		<p class="mx-3 my-2">Input type</p>
		<select class="mx-3 my-0 form-select form-select-sm w-50 d-inline-flex" bind:value={textvalue} on:change={myFunction(textvalue)} aria-label="subSelect">
			<option value="Text" selected>Text</option>
			<option value="Button">Button</option>
			<option value="Checkbox">Checkbox</option>
			<option value="Color">Color</option>
			<option value="Date">Date</option>
			<option value="Datetime-local">Datetime-local</option>
			<option value="Email">Email</option>
			<option value="File">File</option>
			<option value="Hidden">Hidden</option>
			<option value="Image">Image</option>
			<option value="Month">Month</option>
			<option value="Number">Number</option>
			<option value="Password">Password</option>
			<option value="Radio">Radio</option>
			<option value="Range">Range</option>
			<option value="Reset">Reset</option>
			<option value="Search">Search</option>
			<option value="Submit">Submit</option>
			<option value="Tel">Telephone</option>
			<option value="Time">Time</option>
			<option value="Url">Url</option>
			<option value="Week">Week</option>
		</select>
		<div class="mb-3 mx-3 my-2 border border-0">                          <!-- Text Correct Answer -->
			<label for="correctText_answer" class="form-label">Correct Answer</label>
			<input type="text" class="form-control w-100 p-1"  bind:value={currentAdd} id="correctText_answer" aria-describedby="correctText">
		</div>
		<div class="form-check mx-3">                          <!-- Text checkbox -->
			<input class="form-check-input" type="checkbox" value="" id="first_check" checked>
			<label class="form-check-label" for="first_check">User can select any of the answers seperated by comma</label>
		</div>
	<!-- If Select value is Drop Down -->
	{:else if dropDown_Value=="Drop Down"}
		<div class="mb-2 mx-3 pr-3 my-2">
			<label for="dropdown_options" class="form-label">Options</label>
			<div id="correct">
				<div class="d-flex flex-row" id="sub_correct" class:d-none={click==true}>
					<input class="form-check-input mt-2" type="radio" name="dropdown_radio" id="dropdown_radio">          
					<form role="textbox" class="input-group d-flex border border-rad r mx-2 flex-nowrap w-100 rounded" id="drop_selection">        <!-- Dropdown Options -->
						<input type="text" class="form-control p-0 border-0 w-50 rounded" bind:value={currentAdd} on:input={()=>{click=false;}} id="input_second" aria-describedby="option">
						<span role="button" tabindex="-1" class="input-group-text bg-light border-0 bg-white pr-1 rounded" class:d-none={click} aria-label="badge" name="badge_first" id="badge_first">
							<small>
								<span class="badge bg-secondary">Default</span>
							</small>
						</span>
					</form>
					<span class="mt-sm-1 ml-sm-2" on:click={()=>{currentAdd='';click=true;}}>
						<i class='fas fa-trash-alt'></i>
					</span>
				</div>
			</div>
			<button type="button" id="add_optionFirst" name="add_optionFirst" class="btn btn-outline-primary my-3 mx-1" >&#43; Add Option</button>     <!-- Add Option Btn -->
			<div class="mb-2 mx-1">
				<p class="">Note: Select radio button to indicate correct answer</p>
			</div>
		</div>
		<!-- If Select value is Drag and Drop -->
	{:else if dropDown_Value=="Drag and Drop"}
		<div class="mb-2 mx-3 pr-3">
			<div class="d-flex flex-row mt-3">
				<input class="form-check-input mt-2" type="checkbox" id="drag_check" name="drag_check">
				<form role="textbox" class="input-group d-flex border border-rad r mx-2 flex-nowrap w-100 rounded" id="form_other">
					<input type="text" class="form-control p-1 border-0 w-50 rounded" bind:value={currentAdd} id="input_second" aria-describedby="dragDrop">
				</form>
				<span class="mt-sm-1 ml-sm-2">
					<i class='fas fa-trash-alt'></i>
				</span>
			</div>
			<button type="button" id="add_drag" name="add_drag" class="btn btn-outline-primary my-3">&#43; Add Option</button>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="drag_first">
				<label class="form-check-label" for="drag_first">Disable drop option after single drop</label>
			</div>
			<div class="mb-2 my-2">
				<p>Note: Select checkbox for correct drop value</p>
			</div>
		</div>
	<!-- If Select value is Mulitple Line -->
	{:else if dropDown_Value=="Multiple Line"}
	<div class="mb-2 mx-3 my-2 pr-3">
		<label for="text_correct">Correct Answer</label>
		<div class="border border-0 d-flex flex-column overflow-hidden">
			<div class="mr-3 d-flex flex-row">
				<textarea id="text_correct" bind:value="{currentAdd}" rows="{row_value}" cols="{col_value}"></textarea>
				<span class="bg-white mx-3 p-0">
					<div id="row_btn" class="btn-group-vertical border border-dark my-0" role="group" aria-label="Basic example">
						<button id="row_inc" tabindex="0" name="row_inc" type="button" on:click={rowinc} class="bg-white px-0 my-2 border border-0" disabled="{row_value==10?true:false}">
							<i class="fa fa-caret-up mx-2 my-1"></i>
						</button>
						<button id="row_val" name="row_val" type="button" class="bg-white border border-0 px-1">{row_value.toLocaleString(undefined, {minimumIntegerDigits: 2,})}</button>
						<button id="row_dec" name="row_dec" type="button" class="bg-white border border-0 px-0 my-2 " on:click="{rowdec}" disabled="{row_value>5?false:true}">
							<i class="fa fa-caret-down mx-2"></i>
						</button>
					</div>
				</span>
			</div>
			<div id="col_btn" class="btn-group d-flex flex-row border justify-content-evenly border-dark my-2 overflow-hidden" role="group" aria-label="Basic example">
				<button id="col_dec" name="col_dec" type="button" on:click={coldec} class="bg-white px-0 py-0 border border-0" disabled="{col_value==17?true:false}">
					<i class="fa fa-caret-left mx-2"></i>
				</button>
				<button id="col_val" name="col_val" type="button" class="bg-white border border-0 px-0 py-0">{col_value.toLocaleString(undefined, {minimumIntegerDigits: 2,})}</button>
				<button id="col_inc" name="col_inc" type="button" class="bg-white border border-0 px-0 py-0 mx-0" on:click="{colinc}" disabled="{col_value>=17 && col_value<24?false:true}">
					<i class="fa fa-caret-right mx-2"></i>
				</button>
			</div>
		</div>
		<div class="border border-0 w-75">
			<label for="def_text">Default Answer</label>
			<div class="mr-3 d-flex flex-row">
				<textarea id="def_text" rows="{row_value}" cols="{col_value}" bind:value="{default_text}"></textarea>
			</div>
		</div> 
	</div>
<!-- If Select value is Math Equation -->
	{:else if dropDown_Value=="Math Equation"}
		<div class="mb-2 mx-2 pr-3">
			<div class="d-flex flex-row mt-3">
				<form role="textbox" class="input-group d-flex border border-rad r mx-2 flex-nowrap w-75 rounded" id="form_equation">
					<input type="text" class="form-control p-1 border-0 w-100 rounded" bind:value={currentAdd} id="input_equation" aria-describedby="mathEquation">
				</form>
				<span class="mt-sm-1 mr-sm-3" on:click={()=>{currentAdd=''}}>
					<i class='fas fa-trash-alt'></i>
				</span>
			</div>
			<button type="button" id="equation_btn" name="equation_btn" class="btn btn-outline-primary my-4 mx-2">&#43; Add Option</button>
			<div class="mb-2 mx-1">
				<p class="d-inline-flex">Note: Click on the pencil icon to add/edit latext math equation Put cursor before and click add response button to make part of the equation required user input</p>
			</div>
		</div>
		{/if}
	<footer class="bg-white clearfix border border-dark border-0 my-1 mb-2 pb-2 pr-2">
		<button type="button" id="ok_btn" name="ok_btn" class="btn btn-primary mx-3 float-end" on:click={handleAdd}>Ok</button>
		<button type="button" id="cancel_btn" name="cancel_btn" class="btn btn-outline-secondary bg-white float-end mx-1 text-dark">Cancel</button>
	</footer>
</div>
<form>
	<div class="form-group">
			{#each list as {id,inputvalue_first} (id)}
				<textarea class="form-control w-50" id="text_first" rows="3" col="2" contenteditable="true">{textvalue}
					{dropDown_Value}
					{inputvalue_first}
				</textarea>
			{/each}
	</div>
</form>
<div class="container d-flex flex-column justify-content-start border border-dark w-50 mw-50 mh-50vw h-50vw px-0 my-1 py-0">
	<div class="bg-white clearfix border pt-1 pb-0 border-dark border-top-0 border-start-0 border-end-0 border-bottom-0">
		<span class="h4 mx-3 my-3">Settings</span>
		<button type="button" id="close_btn" name="close_btn" class="btn px-2 mx-2 py-1 my-1 bg-white float-end my-0">&#10005;</button>
	</div>
	<section class="d-flex flex-column">
		<div class="d-flex flex-column">
			<div class="form-check mx-3 my-2">
				<input class="form-check-input" type="checkbox" value="" id="setting_first">
				<label class="form-check-label" for="setting_first">Case Sensitive</label>
				<p>
					<small>Upper and lowercase letters are treated as distinct</small>
				</p>
			</div>
			<div class="form-check mx-3 my-2">
				<input class="form-check-input" type="checkbox" value="" id="setting_second">
				<label class="form-check-label" for="setting_second">Ignore special characters</label>
				<p>
					<small>Ignore !,&,*,+,(,), and other punctuations marks while matching</small>
				</p>
			</div>
			<div class="form-check mx-3 my-2">
				<input class="form-check-input" type="checkbox" value="" id="setting_third">
				<label class="form-check-label" for="setting_third">Multiple correct answers</label>
				<p>
					<small>If there are more than one correct answer.User can choose any one of it</small>
				</p>
			</div>
		</div>
		<footer class="bg-white clearfix border border-dark border-0 my-1 mb-2 pb-2 pr-2">
			<button type="button" id="ok_btn" name="ok_btn" class="btn btn-primary mx-3 float-end" on:click={handleAdd}>Ok</button>
			<button type="button" id="cancel_btn" name="cancel_btn" class="btn btn-outline-secondary bg-white float-end mx-1 text-dark">Cancel</button>
		</footer>
	</section>
</div>
