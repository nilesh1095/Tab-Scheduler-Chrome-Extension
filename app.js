const addBtn = document.querySelector('.add-tab');
const category = document.querySelector('.category');
let id = 0;

const addSchedulerHandler = () =>{
    id++
    const newCategory = document.createElement('div');
    newCategory.innerHTML = `
    <div id="category-${id}">
        <div class="category-wrapper">
            <div class="category-inner-wrapper">
                <div>
                    Schedule :
                </div>
                <div>
                    <select class="category-selector">
                        <option value="weekdays" selected>Monday to Friday Scheduler</option>
                        <option value="weekend">Weekend Scheduler</option>
                        <option value="custom">Customize Scheduler</option>
                    </select>
                </div>
            </div>
            <div class="time-url">
                <span>
                    <label for="startTime">Start time: </label>
                    <input type="time" id="startTime" />
                </span>
                <span>
                    <label for="url">URL: </label>
                    <input type="url" id="inputUrl"/>
                </span>
                <div class="button">
                    <button id="submitBtn">Submit</button>
                </div>
            </div>
        </div>
    </div>`
    document.querySelector('.container').insertAdjacentElement('afterbegin', newCategory);
    const categorySelector = document.querySelector('.category-selector');
    categorySelector.addEventListener('click',categoryHandler);
}

const categoryHandler = (e) =>{
    
    const categoryWrapper = document.querySelector(`#${e.path[4].id} .category-inner-wrapper`);
    const newCategorySelector = document.createElement('div');
    newCategorySelector.className="custom-selector";
    newCategorySelector.innerHTML = `
        <span>select a day:</span>
        <select>
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

addBtn.addEventListener('click',addSchedulerHandler);


