const addBtn = document.querySelector('.add-tab');
const scheduleButton = document.getElementById('submitBtn');
let id = 0;

const addSchedulerHandler = () =>{
    console.log("scheduler added")
    id++
    const newCategory = document.createElement('div');
    newCategory.innerHTML = `
    <div id="category-${id}" class="category">
        <div class="category-wrapper">
            <div class="category-inner-wrapper">
                <div>
                    Schedule :
                </div>
                <div>
                    <select class="category-selector" id="dropdown-${id}">
                        <option value="weekdays" selected>Weekdays</option>
                        <option value="weekend">Weekends</option>
                        <option value="custom">Customize</option>
                    </select>
                </div>
            </div>
            <div class="time-url">
                <span>
                    <label for="startTime">Start time: </label>
                    <input type="time" id="startTime-${id}" />
                </span>
                <span>
                    <label for="url">URL : </label>
                    <input type="url" id="inputUrl-${id}"/>
                </span>
            </div>
        </div>
    </div>`
    document.querySelector('.container').insertAdjacentElement('afterbegin', newCategory);
    const categorySelector = document.querySelector('.category-selector');
    categorySelector.addEventListener('click',categoryHandler);
    scheduleButton.style.display='block';
}

const categoryHandler = (e) =>{
    
    const categoryWrapper = document.querySelector(`#${e.path[4].id} .category-inner-wrapper`);
    const newCategorySelector = document.createElement('div');
    newCategorySelector.className="custom-selector";
    newCategorySelector.innerHTML = `
        <span>Select a Day:</span>
        <select class="pick-day">
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thrusday">Thrusday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
        </select>
    `
    if(e.target.value === 'custom' && !document.querySelector(`#${e.path[4].id} .category-inner-wrapper .custom-selector`)){
        categoryWrapper.insertAdjacentElement('beforeend',newCategorySelector)
    }else if(document.querySelector(`#${e.path[4].id} .category-inner-wrapper .custom-selector`)){
        categoryWrapper.removeChild(document.querySelector(`#${e.path[4].id} .category-inner-wrapper .custom-selector`));
    }
}

const onScheduleButtonClickHandler = () =>{
    const category = document.querySelectorAll('.category');
    const schedulerArray =[];
    category.forEach((e,i)=>{
        let time = e.querySelector('input[type="time"]').value;
        let url = e.querySelector('input[type="url"]').value;
        let schedulerDropDown = e.querySelector('.category-selector').value;
        let customSelector  = document.querySelector('.custom-selector');
        let schedulerObject = {
            time,url,schedulerDropDown,customSelector
        }
        schedulerArray.push(schedulerObject)
    });
    
    scheduleTab(schedulerArray);
}

const scheduleTab = (arr) =>{
    arr.forEach(e=>{
        let hour = e.time.split(':')[0];
        let minutes = e.time.split(':')[1];;
        let currentDate = new Date();
        let eneteredTime = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate(),hour,minutes,0,0);
        if(eneteredTime.getTime() < currentDate.getTime()){
            eneteredTime = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+1,hour,minutes,0,0);
        }
        let setTime = eneteredTime - currentDate;
        setTimeOut(setTime,e.url);
    });
};

const setTimeOut = (setTime,url) =>{
    console.log(setTime);
    setTimeout(()=>{
        window.open(url,'_blank');
    },setTime);
}

if(addBtn && scheduleButton){
    addBtn.addEventListener('click',addSchedulerHandler);
    scheduleButton.addEventListener('click',onScheduleButtonClickHandler);
}


