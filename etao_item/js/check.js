jQuery.fn.extend({
	bindCheckAll:function(subCheckBox,unchk){
		let $checkBoxAll = this;
		//1、给全选复选框绑定事件
		this.click(function(){
			let isChecked = this.checked;
			subCheckBox.each(function(){
				//this是jQuery中的当前DOM对象
				this.checked = isChecked;
			});
		});

		//2、给反选复选框绑定事件
		if(unchk!=undefined){
			unchk.click(function(){
				//this：jQuery对象
				subCheckBox.each(function(){
					//this是jQuery中的当前DOM对象
					this.checked = !this.checked;
				});
				changeCheckBoxAll();
			});
		}

		//3、全选框和自复选框之间的联动
		subCheckBox.click(function(){
			//定义一个表示全选框是否选中的变量
			changeCheckBoxAll();
		});

		function changeCheckBoxAll(){
			let isAllChecked = true;
			subCheckBox.each(function(){				
				if(!this.checked){
					isAllChecked = false;
				}
			});
			$checkBoxAll.attr("checked",isAllChecked);
		}
	}
});	
