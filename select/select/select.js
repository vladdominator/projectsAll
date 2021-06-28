function getTemplate(data = [],text,selectedId){
   let textId = text ?? 'Выберете пожалуйста элемент';

   const items = data.map(item=>{
      let cls = '';
      if(item.id === selectedId){
         textId = item.value;
         cls = 'selected';
      }
      return `
      <li class="${cls}" data-type="item" data-value="${item.id}">${item.value}</li>
      `
   })

   return `
   <div class="selected__backdrop" data-type="backdrop"></div>  
   <div class="select__name" data-type="options">
   <span data-type="value">${text}</span>
   <i class="fas fa-caret-down" data-type="arrow"></i>
</div>
<div class="select__options">
   <ul>
   ${items.join('')}
   </ul>
</div>
   `
}
export class Select{
   constructor(element,options){
      this.$el = document.querySelector(element);
      this.options = options;
      this.selectedId = options.selectedId;
      this.#render();
      this.#setup();
   }
   get current(){
      return this.options.data.find(item => item.id === this.selectedId);
   }
   select(id){
      this.selectedId = id;
      this.$value.textContent = this.current.value;
      this.$el.querySelectorAll(`[data-type="item"]`).forEach(element => {
         element.classList.remove('selected');
      });
      this.$el.querySelector(`[data-value="${id}"]`).classList.add('selected');
      this.options.onSelect ? this.options.onSelect(this.current) : null;
      this.hide();
   }
   #render(){
      const {placeholder,data} = this.options;
      this.$el.classList.add('select');
      this.$el.innerHTML = getTemplate(data,placeholder,this.selectedId);
   }
   hide(){
      this.$arrow.style.transform = 'rotate(0deg)'
      this.$el.classList.remove('open');
   }
   open(){
      this.$el.classList.add('open');
      this.$arrow.style.transform = 'rotate(180deg)';
   }
   clickHandler(event){
      const {type} = event.target.dataset;
      if(type === 'options' || type === 'arrow' || type === 'value'){
         this.toggle();
      }
      else if(type === 'item'){
         const id = event.target.dataset.value;
         this.select(id);
      }
      else if(type === 'backdrop'){
         this.hide();
      }
   }
   get isOpen(){
      return this.$el.classList.contains('open');
   }
   toggle(){
      this.isOpen ? this.hide() : this.open();
   }
   destroy(){
      this.$el.removeEventListener('click',this.clickHandler);
   }
   #setup(){
      this.$arrow = this.$el.querySelector('[data-type="arrow"]');
      this.$value = this.$el.querySelector('[data-type="value"]')
      this.clickHandler = this.clickHandler.bind(this);
      this.$el.addEventListener('click',this.clickHandler);
}
}