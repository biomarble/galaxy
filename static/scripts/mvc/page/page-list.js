define(["utils/utils","mvc/grid/grid-view"],function(a,b){var c=Backbone.View.extend({initialize:function(){var b=this;this.setElement($("<div/>")),this.model=new Backbone.Model,a.get({url:Galaxy.root+"page/list",success:function(a){a.dict_format=!0,b.model.set(a),b.render()}})},render:function(){var a=new b(this.model.attributes);this.$el.empty().append(a.$el),this.$el.append(this._templateShared())},_templateShared:function(){var a=$("<div><h2>Pages shared with you by others</h2></div>"),b=this.model.attributes;if(b.shared_by_others&&b.shared_by_others.length>0){var c=$('<table class="colored" border="0" cellspacing="0" cellpadding="0" width="100%"><tr class="header"><th>Title</th><th>Owner</th></tr></table>');_.each(b.shared_by_others,function(a){var b=Galaxy.root+"page/display_by_username_and_slug?username="+a.username+"&slug="+a.slug;c.append('<tr><td><a href="'+b+'">'+_.escape(a.title)+"</a></td><td>"+_.escape(a.username)+"</td></tr>")}),a.append(c)}else a.append("No pages have been shared with you.");return a}});return{View:c}});
//# sourceMappingURL=../../../maps/mvc/page/page-list.js.map