(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6JcC":function(e,t,r){"use strict";r.r(t),r.d(t,"AdminModule",function(){return ie});var o=r("ofXK"),n=r("tyNb"),i=r("Tj/N"),c=r("PSD3"),a=r.n(c),s=r("kIR3"),b=r("fXoL"),l=r("dxD2"),d=r("Nl8B"),u=r("IYfF"),p=r("pqks"),m=r("3Pt+"),g=r("NhFE"),f=r("JuEE");function h(e,t){1&e&&b.Kb(0,"app-feather-icons",34)}function O(e,t){1&e&&b.Kb(0,"app-feather-icons",35)}function v(e,t){if(1&e&&(b.Ob(0,"div",31),b.qc(1,h,1,0,"app-feather-icons",32),b.qc(2,O,1,0,"app-feather-icons",33),b.Nb()),2&e){const e=b.Yb();b.xb(1),b.cc("ngIf",-1==e.filters.order.order),b.xb(1),b.cc("ngIf",1==e.filters.order.order)}}function N(e,t){1&e&&b.Kb(0,"app-feather-icons",34)}function C(e,t){1&e&&b.Kb(0,"app-feather-icons",35)}function y(e,t){if(1&e&&(b.Ob(0,"div",31),b.qc(1,N,1,0,"app-feather-icons",32),b.qc(2,C,1,0,"app-feather-icons",33),b.Nb()),2&e){const e=b.Yb();b.xb(1),b.cc("ngIf",-1==e.filters.order.order),b.xb(1),b.cc("ngIf",1==e.filters.order.order)}}function x(e,t){1&e&&b.Kb(0,"app-feather-icons",34)}function w(e,t){1&e&&b.Kb(0,"app-feather-icons",35)}function M(e,t){if(1&e&&(b.Ob(0,"div",31),b.qc(1,x,1,0,"app-feather-icons",32),b.qc(2,w,1,0,"app-feather-icons",33),b.Nb()),2&e){const e=b.Yb();b.xb(1),b.cc("ngIf",-1==e.filters.order.order),b.xb(1),b.cc("ngIf",1==e.filters.order.order)}}function P(e,t){1&e&&b.Kb(0,"app-feather-icons",34)}function E(e,t){1&e&&b.Kb(0,"app-feather-icons",35)}function k(e,t){if(1&e&&(b.Ob(0,"div",31),b.qc(1,P,1,0,"app-feather-icons",32),b.qc(2,E,1,0,"app-feather-icons",33),b.Nb()),2&e){const e=b.Yb();b.xb(1),b.cc("ngIf",-1==e.filters.order.order),b.xb(1),b.cc("ngIf",1==e.filters.order.order)}}function _(e,t){if(1&e){const e=b.Pb();b.Ob(0,"tr"),b.Ob(1,"td"),b.rc(2),b.Nb(),b.Ob(3,"td"),b.rc(4),b.Nb(),b.Ob(5,"td"),b.rc(6),b.Zb(7,"role"),b.Nb(),b.Ob(8,"td"),b.rc(9),b.Zb(10,"date"),b.Nb(),b.Ob(11,"td",29),b.Ob(12,"div",36),b.Ob(13,"button",37),b.Vb("click",function(){b.kc(e);const r=t.$implicit;return b.Yb().takeControl(r)}),b.Kb(14,"app-feather-icons",7),b.rc(15," Administrar "),b.Nb(),b.Ob(16,"button",38),b.Vb("click",function(){b.kc(e);const r=t.$implicit;return b.Yb().setUserToEdit(r)}),b.Kb(17,"app-feather-icons",7),b.rc(18," Editar "),b.Nb(),b.Ob(19,"button",39),b.Vb("click",function(){b.kc(e);const r=t.$implicit;return b.Yb().deleteUser(r)}),b.Kb(20,"app-feather-icons",7),b.rc(21," Eliminar "),b.Nb(),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=t.$implicit;b.xb(2),b.sc(e.email),b.xb(2),b.sc(e.username),b.xb(2),b.sc(b.ac(7,7,e.role)),b.xb(3),b.sc(b.bc(10,9,e.createdAt,"dd/MM/y")),b.xb(5),b.cc("icon","sliders"),b.xb(3),b.cc("icon","edit"),b.xb(3),b.cc("icon","trash-2")}}let A=(()=>{class e{constructor(e,t,r,o){this.usersService=e,this.router=t,this.paginationService=r,this.authService=o,this.user=new i.a,this.repassword=null,this.filters={email:null,role:"",order:{by:"",order:1}},this.users=[],this.getUsers(),this.paginationService.pageChanged.subscribe(e=>{o.user&&this.getUsers(!0)})}ngOnInit(){}getUsers(e=!1){e||this.paginationService.resetPagination(),this.usersService.getUsers(this.filters).subscribe(e=>{this.users=e.users})}orderBy(e){this.filters.order.by==e&&(this.filters.order.order=1==this.filters.order.order?-1:1),this.filters.order.by=e,this.getUsers()}takeControl(e){e._id!=this.authService.user._id?a.a.fire({title:"\xbfEst\xe1s seguro?",text:"Estas a punto de tomar el control de este usuario, \xbfDeseas continuar?",icon:"question",showCancelButton:!0,confirmButtonText:"Controlar",cancelButtonText:"Cancelar"}).then(t=>{t.isConfirmed&&this.usersService.controlUser(e).subscribe(e=>{a.a.fire("Correcto","Has tomado el control de este usuario correctamente","success"),this.router.navigate(["/"])},e=>a.a.fire("Error","Ha ocurrido un error","error"))}):a.a.fire("Error","No puedes controlar tu propio usuario","error")}setUserToEdit(e){this.router.navigate(["/admin","usuarios",e._id])}deleteUser(e){a.a.fire({title:"\xbfEst\xe1s seguro?",text:"Ingresa a continuaci\xf3n el email del usuario a eliminar",input:"text",icon:"warning"}).then(t=>{t.value===e.email?a.a.fire({title:"\xbfEst\xe1s seguro?",text:"Estas a punto de eliminar este usuario, \xbfDeseas continuar?",icon:"error",showCancelButton:!0,confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then(t=>{t.isConfirmed&&this.usersService.deleteUser(e._id).subscribe(e=>{Object(s.c)(e),this.getUsers(),this.user=new i.a},e=>Object(s.c)(e.error))}):a.a.fire("Error","El email no coincide","error")})}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(l.a),b.Jb(n.f),b.Jb(d.a),b.Jb(u.a))},e.\u0275cmp=b.Db({type:e,selectors:[["app-users"]],decls:58,vars:8,consts:[[1,"container-fluid","users"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"add-user-btn"],["routerLink","/admin/usuarios/new",1,"btn","btn-secondary"],[3,"icon"],[1,"card-body","custom-datatable"],[1,"filters","d-flex","justify-content-between","align-items-center"],[1,"row","filters-options","w-75"],[1,"col-12","col-sm-6"],[1,"form-group"],["for","filterEmail"],["name","emailFilter","type","text","id","filterEmail","placeholder","Filtrar por email/alias",1,"form-control","w-100",3,"ngModel","ngModelChange","keyup.enter"],["for","filterRole"],["name","roleFilter","type","text","id","filterRole","placeholder","Filtrar por rol",1,"form-control",3,"ngModel","ngModelChange","change"],["value",""],["value","ADMIN_ROLE"],["value","CLIENT_ROLE"],["value","PHOTOGRAPHER_ROLE"],["value","CASHIER_ROLE"],[1,"filter-btn","mb-3","w-25","text-right"],[1,"btn","btn-secondary","w-100","minify-feather",2,"max-width","200px",3,"click"],["icon","search"],[1,"table-responsive"],[1,"table","table-striped"],["scope","col",1,"sort",3,"click"],["class","normal-sort",4,"ngIf"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"normal-sort"],["icon","chevron-up",4,"ngIf"],["icon","chevron-down",4,"ngIf"],["icon","chevron-up"],["icon","chevron-down"],[1,"buttons","d-flex","justify-content-center","flex-wrap-no","minify-feather"],[1,"btn","btn-success","mr-2",3,"click"],[1,"btn","btn-secondary","mr-2",3,"click"],[1,"btn","btn-danger","minify-feather",3,"click"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Ob(2,"div",2),b.Ob(3,"div",3),b.Ob(4,"div",4),b.Ob(5,"h5"),b.rc(6,"Usuarios activos"),b.Nb(),b.Ob(7,"div",5),b.Ob(8,"button",6),b.Kb(9,"app-feather-icons",7),b.rc(10," Nuevo usuario "),b.Nb(),b.Nb(),b.Nb(),b.Ob(11,"div",8),b.Ob(12,"div",9),b.Ob(13,"div",10),b.Ob(14,"div",11),b.Ob(15,"div",12),b.Ob(16,"label",13),b.rc(17,"Email/alias"),b.Nb(),b.Ob(18,"input",14),b.Vb("ngModelChange",function(e){return t.filters.email=e})("keyup.enter",function(){return t.getUsers()}),b.Nb(),b.Nb(),b.Nb(),b.Ob(19,"div",11),b.Ob(20,"label",15),b.rc(21,"Rol"),b.Nb(),b.Ob(22,"select",16),b.Vb("ngModelChange",function(e){return t.filters.role=e})("change",function(){return t.getUsers()}),b.Ob(23,"option",17),b.rc(24,"Filtrar por rol"),b.Nb(),b.Ob(25,"option",18),b.rc(26,"Administrador"),b.Nb(),b.Ob(27,"option",19),b.rc(28,"Cliente"),b.Nb(),b.Ob(29,"option",20),b.rc(30,"Fotografo"),b.Nb(),b.Ob(31,"option",21),b.rc(32,"Cajero"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(33,"div",22),b.Ob(34,"button",23),b.Vb("click",function(){return t.getUsers()}),b.Kb(35,"app-feather-icons",24),b.rc(36," Filtrar "),b.Nb(),b.Nb(),b.Nb(),b.Ob(37,"div",25),b.Ob(38,"table",26),b.Ob(39,"thead"),b.Ob(40,"tr"),b.Ob(41,"th",27),b.Vb("click",function(){return t.orderBy("email")}),b.rc(42," Email "),b.qc(43,v,3,2,"div",28),b.Nb(),b.Ob(44,"th",27),b.Vb("click",function(){return t.orderBy("username")}),b.rc(45," Alias "),b.qc(46,y,3,2,"div",28),b.Nb(),b.Ob(47,"td",27),b.Vb("click",function(){return t.orderBy("role")}),b.rc(48," Rol "),b.qc(49,M,3,2,"div",28),b.Nb(),b.Ob(50,"th",27),b.Vb("click",function(){return t.orderBy("createdAt")}),b.rc(51," Fecha de alta "),b.qc(52,k,3,2,"div",28),b.Nb(),b.Ob(53,"th",29),b.rc(54," Acci\xf3n "),b.Nb(),b.Nb(),b.Nb(),b.Ob(55,"tbody"),b.qc(56,_,22,12,"tr",30),b.Nb(),b.Nb(),b.Nb(),b.Kb(57,"app-pagination"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.xb(9),b.cc("icon","plus"),b.xb(9),b.cc("ngModel",t.filters.email),b.xb(4),b.cc("ngModel",t.filters.role),b.xb(21),b.cc("ngIf","email"==t.filters.order.by),b.xb(3),b.cc("ngIf","username"==t.filters.order.by),b.xb(3),b.cc("ngIf","role"==t.filters.order.by),b.xb(3),b.cc("ngIf","createdAt"==t.filters.order.by),b.xb(4),b.cc("ngForOf",t.users))},directives:[n.g,p.a,m.a,m.i,m.k,m.p,m.l,m.r,o.m,o.l,g.a],pipes:[f.a,o.e],styles:["@media screen and (max-width:768px){.filters[_ngcontent-%COMP%]{flex-direction:column}.filters[_ngcontent-%COMP%]   .filters-options[_ngcontent-%COMP%]{width:100%!important;flex-direction:column!important}.filters[_ngcontent-%COMP%]   .filters-options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%!important;max-width:100%!important}.filters[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]{width:100%!important;display:flex;justify-content:center;margin-top:30px}}"]}),e})();var S=r("d8Z/"),j=r("hTao"),D=r("0yvB"),T=r("rmxa"),I=r("aZ8m"),V=r("BAfr"),F=r("+803"),K=r("aF9I");let R=(()=>{class e{constructor(e,t,r){this.route=e,this.navServices=t,this.layout=r,this.route.queryParams.subscribe(e=>{this.layout.config.settings.layout=e.layout?e.layout:this.layout.config.settings.layout})}ngAfterViewInit(){setTimeout(()=>{S.replace()})}getRouterOutletState(e){return e.isActivated?e.activatedRoute:""}get layoutClass(){switch(this.layout.config.settings.layout){case"Dubai":return"compact-wrapper";case"London":return"only-body";case"Seoul":return"compact-wrapper modern-type";case"LosAngeles":return this.navServices.horizontal?"horizontal-wrapper material-type":"compact-wrapper material-type";case"Paris":return"compact-wrapper dark-sidebar";case"Tokyo":return"compact-sidebar";case"Madrid":return"compact-wrapper color-sidebar";case"Moscow":return"compact-sidebar compact-small";case"NewYork":return"compact-wrapper box-layout";case"Singapore":return this.navServices.horizontal?"horizontal-wrapper enterprice-type":"compact-wrapper enterprice-type";case"Rome":return"compact-sidebar compact-small material-icon";case"Barcelona":return this.navServices.horizontal?"horizontal-wrapper enterprice-type advance-layout":"compact-wrapper enterprice-type advance-layout"}}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(n.a),b.Jb(D.a),b.Jb(T.a))},e.\u0275cmp=b.Db({type:e,selectors:[["app-admin"]],decls:13,vars:8,consts:[[3,"ngClass"],["id","canvas-bookmark",1,"page-wrapper",3,"ngClass"],[1,"page-body-wrapper"],[1,"sidebar-wrapper"],[1,"page-body"],["o","outlet"],[1,"footer"]],template:function(e,t){if(1&e&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Kb(2,"app-header"),b.Ob(3,"div",2),b.Ob(4,"div",3),b.Kb(5,"app-sidebar"),b.Nb(),b.Ob(6,"div",4),b.Ob(7,"main"),b.Kb(8,"app-breadcrumb"),b.Kb(9,"router-outlet",null,5),b.Nb(),b.Nb(),b.Ob(11,"footer",6),b.Kb(12,"app-footer"),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e){const e=b.ic(10);b.zb(t.layout.config.settings.layout_version),b.cc("ngClass",t.layout.config.settings.layout_type),b.xb(1),b.cc("ngClass",t.layoutClass),b.xb(3),b.Bb("close_icon",t.navServices.collapseSidebar),b.yb("sidebar-layout",t.layout.config.settings.sidebar_type),b.xb(3),b.cc("@fadeInAnimation",t.getRouterOutletState(e))}},directives:[o.k,I.a,V.a,F.a,n.k,K.a],styles:[""],data:{animation:[j.a]}}),e})();function U(e,t){if(1&e){const e=b.Pb();b.Ob(0,"button",29),b.Vb("click",function(){return b.kc(e),b.Yb().createUser()}),b.Kb(1,"app-feather-icons",30),b.rc(2," Crear usuario "),b.Nb()}2&e&&(b.xb(1),b.cc("icon","save"))}function B(e,t){if(1&e){const e=b.Pb();b.Ob(0,"button",29),b.Vb("click",function(){return b.kc(e),b.Yb().editUser()}),b.Kb(1,"app-feather-icons",30),b.rc(2," Editar usuario "),b.Nb()}2&e&&(b.xb(1),b.cc("icon","edit"))}let q=(()=>{class e{constructor(e,t,r){this.route=e,this.usersService=t,this.router=r,this.editMode=!1,this.user=new i.a,this.route.params.subscribe(e=>{"new"!==e.userId?(this.getUser(e.userId),this.editMode=!0):(this.editMode=!1,this.user=new i.a,this.repassword=null)})}ngOnInit(){}getUser(e){this.usersService.getUserById(e).subscribe(e=>{this.user=e.user},e=>this.router.navigate(["/admin"]))}validatePassword(){return this.user.password?this.user.password&&!this.repassword?{valid:!1,message:"Debes repetir tu contrase\xf1a"}:this.user.password!==this.repassword?{valid:!1,message:"Las contrase\xf1as no coinciden"}:{valid:!0}:{valid:!1,message:"Debes ingresar tu contrase\xf1a"}}validateUser(){if(!this.user.email)return{valid:!1,message:"El email es necesario"};if(!this.user.username)return{valid:!1,message:"Ingresa un nombre de usuario"};if(!this.editMode||this.user.password){let e=this.validatePassword();if(!e.valid)return e}return{valid:!0}}createUser(){const e=this.validateUser();e.valid?this.usersService.createUser(this.user).subscribe(e=>{Object(s.c)(e),this.router.navigate(["/admin","usuarios"])},e=>Object(s.c)(e.error)):a.a.fire("Error",e.message,"error")}editUser(){const e=this.validateUser();e.valid?this.usersService.editUser(this.user).subscribe(e=>{Object(s.c)(e),this.getUser(this.user._id),this.repassword=null},e=>Object(s.c)(e.error)):a.a.fire("Error",e.message,"error")}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(n.a),b.Jb(l.a),b.Jb(n.f))},e.\u0275cmp=b.Db({type:e,selectors:[["app-manage-user"]],decls:54,vars:10,consts:[[1,"container-fluid","users"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header","d-flex","justify-content-between"],[1,"card-body"],[1,"form-group","row"],["for","inputRole",1,"col-12","col-sm-3","col-form-label"],[1,"col-12","col-sm-9"],["name","role","id","inputRole",1,"form-control",3,"ngModel","ngModelChange"],["value","CLIENT_ROLE"],["value","CASHIER_ROLE"],["value","PHOTOGRAPHER_ROLE"],["value","ADMIN_ROLE"],["for","inputEmail",1,"col-12","col-sm-3","col-form-label"],["name","email","id","inputEmail","type","email","placeholder","Email",1,"form-control",3,"ngModel","ngModelChange"],["for","inputAlias",1,"col-12","col-sm-3","col-form-label"],["name","username","id","inputAlias","type","text","placeholder","Alias",1,"form-control",3,"ngModel","ngModelChange"],["for","inputName",1,"col-12","col-sm-3","col-form-label"],["name","name","id","inputName","type","text","placeholder","Nombre",1,"form-control",3,"ngModel","ngModelChange"],["for","inputPassword",1,"col-12","col-sm-3","col-form-label"],["name","password","id","inputPassword","type","password","placeholder","Contrase\xf1a",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","row","mb-3"],["for","inputRePassword",1,"col-12","col-sm-3","col-form-label"],["name","repassword","id","inputRePassword","type","password","placeholder","Repetir contrase\xf1a",1,"form-control",3,"ngModel","ngModelChange"],["for","inputObservation",1,"col-12","col-form-label"],["name","observation","id","inputObservation","rows","5",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","mt-4"],["class","btn btn-secondary w-100",3,"click",4,"ngIf"],[1,"btn","btn-secondary","w-100",3,"click"],[3,"icon"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Ob(2,"div",2),b.Ob(3,"div",3),b.Ob(4,"div",4),b.Ob(5,"h5"),b.rc(6),b.Nb(),b.Nb(),b.Ob(7,"div",5),b.Ob(8,"div",6),b.Ob(9,"label",7),b.rc(10,"Rol"),b.Nb(),b.Ob(11,"div",8),b.Ob(12,"select",9),b.Vb("ngModelChange",function(e){return t.user.role=e}),b.Ob(13,"option",10),b.rc(14,"Cliente"),b.Nb(),b.Ob(15,"option",11),b.rc(16,"Cajero"),b.Nb(),b.Ob(17,"option",12),b.rc(18,"Fotografo"),b.Nb(),b.Ob(19,"option",13),b.rc(20,"Administrador"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(21,"div",6),b.Ob(22,"label",14),b.rc(23,"Email"),b.Nb(),b.Ob(24,"div",8),b.Ob(25,"input",15),b.Vb("ngModelChange",function(e){return t.user.email=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(26,"div",6),b.Ob(27,"label",16),b.rc(28,"Alias"),b.Nb(),b.Ob(29,"div",8),b.Ob(30,"input",17),b.Vb("ngModelChange",function(e){return t.user.username=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(31,"div",6),b.Ob(32,"label",18),b.rc(33,"Nombre"),b.Nb(),b.Ob(34,"div",8),b.Ob(35,"input",19),b.Vb("ngModelChange",function(e){return t.user.name=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(36,"div",6),b.Ob(37,"label",20),b.rc(38,"Contrase\xf1a"),b.Nb(),b.Ob(39,"div",8),b.Ob(40,"input",21),b.Vb("ngModelChange",function(e){return t.user.password=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(41,"div",22),b.Ob(42,"label",23),b.rc(43,"Repetir contrase\xf1a"),b.Nb(),b.Ob(44,"div",8),b.Ob(45,"input",24),b.Vb("ngModelChange",function(e){return t.repassword=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(46,"div",6),b.Ob(47,"label",25),b.rc(48,"Observaciones"),b.Nb(),b.Ob(49,"div",2),b.Ob(50,"textarea",26),b.Vb("ngModelChange",function(e){return t.user.observation=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(51,"div",27),b.qc(52,U,3,1,"button",28),b.qc(53,B,3,1,"button",28),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.xb(6),b.tc("",t.editMode?"Editar":"A\xf1adir"," usuario"),b.xb(6),b.cc("ngModel",t.user.role),b.xb(13),b.cc("ngModel",t.user.email),b.xb(5),b.cc("ngModel",t.user.username),b.xb(5),b.cc("ngModel",t.user.name),b.xb(5),b.cc("ngModel",t.user.password),b.xb(5),b.cc("ngModel",t.repassword),b.xb(5),b.cc("ngModel",t.user.observation),b.xb(2),b.cc("ngIf",!t.editMode),b.xb(1),b.cc("ngIf",t.editMode))},directives:[m.p,m.i,m.k,m.l,m.r,m.a,o.m,p.a],styles:[""]}),e})();var J=r("IgG/"),L=r("J2l8");function Y(e,t){if(1&e){const e=b.Pb();b.Ob(0,"tr"),b.Ob(1,"td"),b.rc(2),b.Nb(),b.Ob(3,"td"),b.rc(4,"Administrador"),b.Nb(),b.Ob(5,"td",28),b.Ob(6,"div",30),b.Ob(7,"button",31),b.Vb("click",function(){b.kc(e);const r=t.$implicit;return b.Yb().deleteTag(r._id)}),b.Kb(8,"app-feather-icons",12),b.rc(9," Eliminar "),b.Nb(),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=t.$implicit;b.xb(2),b.sc(e.value),b.xb(6),b.cc("icon","trash-2")}}let H=(()=>{class e{constructor(e,t){this.tagsService=e,this.paginationService=t,this.tag=new J.a,this.tags=[],this.tagFilter=null,this.getTags(),this.paginationService.pageChanged.subscribe(e=>{this.getTags()})}ngOnInit(){}getTags(){this.tagsService.getTags(this.tagFilter).subscribe(e=>{this.tags=e.tags})}createTag(){this.tag.tag?this.tagsService.createTag(this.tag).subscribe(e=>{this.tag=new J.a,this.getTags(),Object(s.c)(e)}):a.a.fire("Error","Debes ingresar un valor para el tag")}deleteTag(e){a.a.fire({title:"\xbfEst\xe1s seguro?",text:"Estas a punto de borrar este tag, \xbfDeseas continuar?",icon:"question",showCancelButton:!0,confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then(t=>{t.isConfirmed&&this.tagsService.deleteTag(e).subscribe(e=>{Object(s.c)(e),this.getTags()},e=>a.a.fire("Error","Ha ocurrido un error","error"))})}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(L.a),b.Jb(d.a))},e.\u0275cmp=b.Db({type:e,selectors:[["app-tags"]],decls:47,vars:4,consts:[[1,"container-fluid","tags"],[1,"row"],[1,"col-12","col-sm-4"],[1,"card"],[1,"card-header","d-flex","justify-content-between"],[1,"card-body"],[1,"form-group","row"],["for","inputTag",1,"col-12","col-sm-3","col-form-label"],[1,"col-12","col-sm-9"],["name","Tag","id","inputTag","type","Tag","placeholder","T\xedtulo del tag",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","mt-4"],[1,"btn","btn-secondary","w-100","mt-4",3,"click"],[3,"icon"],[1,"col-12","col-sm-8"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"card-body","custom-datatable"],[1,"filters","d-flex","justify-content-between","align-items-center"],[1,"row","filters-options","w-75"],[1,"col-12"],[1,"form-group"],["for","filterTag"],["name","tagFilter","type","text","id","filterTag","placeholder","Filtrar tags",1,"form-control","w-100",3,"ngModel","ngModelChange","keyup.enter"],[1,"filter-btn","mb-3","w-25","text-right"],[1,"btn","btn-secondary","w-100","minify-feather",2,"max-width","200px",3,"click"],["icon","search"],[1,"table-responsive"],[1,"table","table-striped"],["scope","col"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"buttons","d-flex","justify-content-center","flex-wrap-no","minify-feather"],[1,"btn","btn-danger","minify-feather",3,"click"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Ob(2,"div",2),b.Ob(3,"div",3),b.Ob(4,"div",4),b.Ob(5,"h5"),b.rc(6,"Crear tag"),b.Nb(),b.Nb(),b.Ob(7,"div",5),b.Ob(8,"div",6),b.Ob(9,"label",7),b.rc(10,"Tag"),b.Nb(),b.Ob(11,"div",8),b.Ob(12,"input",9),b.Vb("ngModelChange",function(e){return t.tag.tag=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(13,"div",10),b.Ob(14,"button",11),b.Vb("click",function(){return t.createTag()}),b.Kb(15,"app-feather-icons",12),b.rc(16," Crear tag "),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(17,"div",13),b.Ob(18,"div",3),b.Ob(19,"div",14),b.Ob(20,"h5"),b.rc(21,"Tags activos"),b.Nb(),b.Nb(),b.Ob(22,"div",15),b.Ob(23,"div",16),b.Ob(24,"div",17),b.Ob(25,"div",18),b.Ob(26,"div",19),b.Ob(27,"label",20),b.rc(28,"Filtrar"),b.Nb(),b.Ob(29,"input",21),b.Vb("ngModelChange",function(e){return t.tagFilter=e})("keyup.enter",function(){return t.getTags()}),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(30,"div",22),b.Ob(31,"button",23),b.Vb("click",function(){return t.getTags()}),b.Kb(32,"app-feather-icons",24),b.rc(33," Filtrar "),b.Nb(),b.Nb(),b.Nb(),b.Ob(34,"div",25),b.Ob(35,"table",26),b.Ob(36,"thead"),b.Ob(37,"tr"),b.Ob(38,"th",27),b.rc(39," Tag "),b.Nb(),b.Ob(40,"th",27),b.rc(41," Creador "),b.Nb(),b.Ob(42,"th",28),b.rc(43," Acci\xf3n "),b.Nb(),b.Nb(),b.Nb(),b.Ob(44,"tbody"),b.qc(45,Y,10,2,"tr",29),b.Nb(),b.Nb(),b.Nb(),b.Kb(46,"app-pagination"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.xb(12),b.cc("ngModel",t.tag.tag),b.xb(3),b.cc("icon","save"),b.xb(14),b.cc("ngModel",t.tagFilter),b.xb(16),b.cc("ngForOf",t.tags))},directives:[m.a,m.i,m.k,p.a,o.l,g.a],styles:["@media screen and (max-width:600px){.filters[_ngcontent-%COMP%]{flex-direction:column}.filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%!important}.filters[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%!important;margin-bottom:30px!important}.filters[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%!important;max-width:100%!important}.filters[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   app-feather-icons[_ngcontent-%COMP%]{position:relative;top:-5px!important}}"]}),e})();var $=r("Gkrs");let z=(()=>{class e{constructor(e){this.parametersService=e,this.parameters={unityPrice:0},this.getParameters()}ngOnInit(){}getParameters(){this.parametersService.getParameters().subscribe(e=>{this.parameters=e.parameters})}updateParameters(){this.parametersService.updateParameters(this.parameters).subscribe(e=>{Object(s.c)(e)})}}return e.\u0275fac=function(t){return new(t||e)(b.Jb($.a))},e.\u0275cmp=b.Db({type:e,selectors:[["app-parameters"]],decls:17,vars:2,consts:[[1,"container-fluid","parameters"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header","d-flex","justify-content-between"],[1,"card-body"],[1,"form-group","row"],["for","inputTag",1,"col-12","col-sm-3","col-form-label"],[1,"col-12","col-sm-9"],["name","unityPrice","id","inputUnityPrice","type","text","placeholder","Precio unitario",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","mt-4"],[1,"btn","btn-secondary","w-100","mt-4",3,"click"],[3,"icon"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Ob(2,"div",2),b.Ob(3,"div",3),b.Ob(4,"div",4),b.Ob(5,"h5"),b.rc(6,"Modificar par\xe1metros"),b.Nb(),b.Nb(),b.Ob(7,"div",5),b.Ob(8,"div",6),b.Ob(9,"label",7),b.rc(10,"Valor por unidad"),b.Nb(),b.Ob(11,"div",8),b.Ob(12,"input",9),b.Vb("ngModelChange",function(e){return t.parameters.unityPrice=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(13,"div",10),b.Ob(14,"button",11),b.Vb("click",function(){return t.updateParameters()}),b.Kb(15,"app-feather-icons",12),b.rc(16," Actualizar par\xe1metros "),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.xb(12),b.cc("ngModel",t.parameters.unityPrice),b.xb(3),b.cc("icon","save"))},directives:[m.a,m.i,m.k,p.a],styles:[""]}),e})();class G{constructor(e,t,r){this._id=e,this.discountAmount=t,this.imagesAmount=r}}var Z=r("24vF");function X(e,t){if(1&e){const e=b.Pb();b.Ob(0,"tr"),b.Ob(1,"td",21),b.rc(2),b.Nb(),b.Ob(3,"td",21),b.rc(4),b.Nb(),b.Ob(5,"td",21),b.Ob(6,"div",23),b.Ob(7,"button",24),b.Vb("click",function(){b.kc(e);const r=t.$implicit;return b.Yb().deleteCombo(r._id)}),b.Kb(8,"app-feather-icons",14),b.rc(9," Eliminar "),b.Nb(),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=t.$implicit;b.xb(2),b.tc("$",e.discountAmount,""),b.xb(2),b.sc(e.imagesAmount),b.xb(4),b.cc("icon","trash-2")}}let Q=(()=>{class e{constructor(e,t){this.comboDiscountsService=e,this.paginationService=t,this.comboDiscount=new G,this.comboDiscounts=[],this.getCombos(),this.paginationService.pageChanged.subscribe(e=>{this.getCombos()})}ngOnInit(){}getCombos(){this.comboDiscountsService.getCombos().subscribe(e=>{this.comboDiscounts=e.comboDiscounts})}createComboDiscount(){this.validateCombo()&&this.comboDiscountsService.createComboDiscount(this.comboDiscount).subscribe(e=>{e.ok&&(a.a.fire("Correcto","Se ha creado el combo correctamente","success"),this.getCombos(),this.comboDiscount=new G)},e=>Object(s.c)(e.error))}validateCombo(){return!this.comboDiscount.discountAmount||isNaN(this.comboDiscount.discountAmount)?(a.a.fire("Error","El monto de descuento debe ser un n\xfamero v\xe1lido","error"),!1):this.comboDiscount.discountAmount<=0?(a.a.fire("Error","El monto de descuento debe ser mayor a 0","error"),!1):!(!this.comboDiscount.imagesAmount||isNaN(this.comboDiscount.imagesAmount))||(a.a.fire("Error","La cantidad de imagenes debe ser un n\xfamero v\xe1lido","error"),!1)}deleteCombo(e){a.a.fire({title:"Estas a punto de eliminar este descuento, \xbfDeseas continuar?",icon:"warning",showCancelButton:!0,confirmButtonText:"Eliminar",confirmButtonColor:"#dc3545",cancelButtonText:"Cancelar"}).then(t=>{t.isConfirmed&&this.comboDiscountsService.deleteCombo(e).subscribe(e=>{Object(s.c)(e),this.getCombos()})})}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(Z.a),b.Jb(d.a))},e.\u0275cmp=b.Db({type:e,selectors:[["app-combo-discounts"]],decls:41,vars:4,consts:[[1,"container-fluid","tags"],[1,"row"],[1,"col-12","col-sm-4"],[1,"card"],[1,"card-header","d-flex","justify-content-between"],[1,"card-body"],[1,"form-group","row","input-group"],["for","imagesAmount",1,"col-12","col-sm-3","col-form-label"],[1,"col-12","col-sm-9"],["name","imagesAmount","id","imagesAmount","type","text","placeholder","Ejemplo: 3",1,"form-control",3,"ngModel","ngModelChange"],["for","discountAmount",1,"col-12","col-sm-3","col-form-label"],["name","discountAmount","id","discountAmount","type","text","placeholder","Ejemplo: 500",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","mt-4"],[1,"btn","btn-secondary","w-100","mt-4",3,"click"],[3,"icon"],[1,"col-12","col-sm-8"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"card-body","custom-datatable"],[1,"table-responsive"],[1,"table","table-striped"],["scope","col",1,"text-center"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"buttons","d-flex","justify-content-center","flex-wrap-no","minify-feather"],[1,"btn","btn-danger","minify-feather",3,"click"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Ob(2,"div",2),b.Ob(3,"div",3),b.Ob(4,"div",4),b.Ob(5,"h5"),b.rc(6,"Crear combo"),b.Nb(),b.Nb(),b.Ob(7,"div",5),b.Ob(8,"div",6),b.Ob(9,"label",7),b.rc(10,"Cada X fotos"),b.Nb(),b.Ob(11,"div",8),b.Ob(12,"input",9),b.Vb("ngModelChange",function(e){return t.comboDiscount.imagesAmount=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(13,"div",6),b.Ob(14,"label",10),b.rc(15,"Monto del descuento (fijo sobre el monto total) "),b.Nb(),b.Ob(16,"div",8),b.Ob(17,"input",11),b.Vb("ngModelChange",function(e){return t.comboDiscount.discountAmount=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(18,"div",12),b.Ob(19,"button",13),b.Vb("click",function(){return t.createComboDiscount()}),b.Kb(20,"app-feather-icons",14),b.rc(21," Crear descuento "),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(22,"div",15),b.Ob(23,"div",3),b.Ob(24,"div",16),b.Ob(25,"h5"),b.rc(26,"Combos activos"),b.Nb(),b.Nb(),b.Ob(27,"div",17),b.Ob(28,"div",18),b.Ob(29,"table",19),b.Ob(30,"thead"),b.Ob(31,"tr"),b.Ob(32,"th",20),b.rc(33," Descuento "),b.Nb(),b.Ob(34,"th",20),b.rc(35," Cantidad de img. "),b.Nb(),b.Ob(36,"th",21),b.rc(37," Acci\xf3n "),b.Nb(),b.Nb(),b.Nb(),b.Ob(38,"tbody"),b.qc(39,X,10,3,"tr",22),b.Nb(),b.Nb(),b.Nb(),b.Kb(40,"app-pagination"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.xb(12),b.cc("ngModel",t.comboDiscount.imagesAmount),b.xb(5),b.cc("ngModel",t.comboDiscount.discountAmount),b.xb(3),b.cc("icon","save"),b.xb(19),b.cc("ngForOf",t.comboDiscounts))},directives:[m.a,m.i,m.k,p.a,o.l,g.a],styles:[".input-group[_ngcontent-%COMP%]{display:block!important}.input-group[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%;max-width:100%}"]}),e})();class W{constructor(e,t,r,o){this._id=e,this.discountPercentage=t,this.code=r,this.title=o}}var ee=r("uQub");function te(e,t){if(1&e){const e=b.Pb();b.Ob(0,"tr"),b.Ob(1,"td",23),b.rc(2),b.Nb(),b.Ob(3,"td",23),b.rc(4),b.Nb(),b.Ob(5,"td",23),b.rc(6),b.Nb(),b.Ob(7,"td",23),b.Ob(8,"div",25),b.Ob(9,"button",26),b.Vb("click",function(){b.kc(e);const r=t.$implicit;return b.Yb().deleteCoupon(r._id)}),b.Kb(10,"app-feather-icons",16),b.rc(11," Eliminar "),b.Nb(),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=t.$implicit;b.xb(2),b.sc(e.discountPercentage),b.xb(2),b.sc(e.code),b.xb(2),b.sc(e.title),b.xb(4),b.cc("icon","trash-2")}}const re=[{path:"",component:R,children:[{path:"usuarios",component:A},{path:"usuarios/:userId",component:q},{path:"tags",component:H},{path:"parametros",component:z},{path:"descuentos/combos",component:Q},{path:"descuentos/cupones",component:(()=>{class e{constructor(e,t){this.couponsService=e,this.paginationService=t,this.coupon=new W,this.coupons=[],this.getCoupons(),this.paginationService.pageChanged.subscribe(e=>{this.getCoupons()})}ngOnInit(){}getCoupons(){this.couponsService.getCoupons().subscribe(e=>{this.coupons=e.coupons})}createCoupon(){this.validateCoupon()&&this.couponsService.createCoupon(this.coupon).subscribe(e=>{e.ok&&(a.a.fire("Correcto","Se ha creado el cup\xf3n correctamente","success"),this.getCoupons(),this.coupon=new W)},e=>Object(s.c)(e.error))}validateCoupon(){return!this.coupon.discountPercentage||isNaN(this.coupon.discountPercentage)?(a.a.fire("Error","El porcentaje de descuento debe ser un n\xfamero v\xe1lido","error"),!1):this.coupon.discountPercentage<=0||this.coupon.discountPercentage>100?(a.a.fire("Error","El porcentaje de descuento debe estar entre 0 y 100","error"),!1):this.coupon.code?!!this.coupon.title||(a.a.fire("Error","Debes especificar un identificador para el cup\xf3n","error"),!1):(a.a.fire("Error","Debes especificar un c\xf3digo para el cup\xf3n","error"),!1)}deleteCoupon(e){a.a.fire({title:"Estas a punto de eliminar este cup\xf3n, \xbfDeseas continuar?",icon:"warning",showCancelButton:!0,confirmButtonText:"Eliminar",confirmButtonColor:"#dc3545",cancelButtonText:"Cancelar"}).then(t=>{t.isConfirmed&&this.couponsService.deleteCoupon(e).subscribe(e=>{Object(s.c)(e),this.getCoupons()})})}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(ee.a),b.Jb(d.a))},e.\u0275cmp=b.Db({type:e,selectors:[["app-coupons"]],decls:48,vars:5,consts:[[1,"container-fluid","tags"],[1,"row"],[1,"col-12","col-sm-4"],[1,"card"],[1,"card-header","d-flex","justify-content-between"],[1,"card-body"],[1,"form-group","row","input-group"],["for","discountPercentage",1,"col-12","col-sm-3","col-form-label"],[1,"col-12","col-sm-9"],["name","discountPercentage","id","discountPercentage","type","text","placeholder","Ejemplo: 20",1,"form-control",3,"ngModel","ngModelChange"],["for","code",1,"col-12","col-sm-3","col-form-label"],["name","code","id","code","type","text","placeholder","Ejemplo: 30OFF",1,"form-control",3,"ngModel","ngModelChange"],["for","title",1,"col-12","col-sm-3","col-form-label"],["name","title","id","title","type","text","placeholder","Ejemplo: Cup\xf3n por residencia",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","mt-4"],[1,"btn","btn-secondary","w-100","mt-4",3,"click"],[3,"icon"],[1,"col-12","col-sm-8"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"card-body","custom-datatable"],[1,"table-responsive"],[1,"table","table-striped"],["scope","col",1,"text-center"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"buttons","d-flex","justify-content-center","flex-wrap-no","minify-feather"],[1,"btn","btn-danger","minify-feather",3,"click"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Ob(2,"div",2),b.Ob(3,"div",3),b.Ob(4,"div",4),b.Ob(5,"h5"),b.rc(6,"Crear cup\xf3n"),b.Nb(),b.Nb(),b.Ob(7,"div",5),b.Ob(8,"div",6),b.Ob(9,"label",7),b.rc(10,"Porcentaje de descuento"),b.Nb(),b.Ob(11,"div",8),b.Ob(12,"input",9),b.Vb("ngModelChange",function(e){return t.coupon.discountPercentage=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(13,"div",6),b.Ob(14,"label",10),b.rc(15,"C\xf3digo del cup\xf3n"),b.Nb(),b.Ob(16,"div",8),b.Ob(17,"input",11),b.Vb("ngModelChange",function(e){return t.coupon.code=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(18,"div",6),b.Ob(19,"label",12),b.rc(20,"Identificador del cup\xf3n"),b.Nb(),b.Ob(21,"div",8),b.Ob(22,"input",13),b.Vb("ngModelChange",function(e){return t.coupon.title=e}),b.Nb(),b.Nb(),b.Nb(),b.Ob(23,"div",14),b.Ob(24,"button",15),b.Vb("click",function(){return t.createCoupon()}),b.Kb(25,"app-feather-icons",16),b.rc(26," Crear descuento "),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(27,"div",17),b.Ob(28,"div",3),b.Ob(29,"div",18),b.Ob(30,"h5"),b.rc(31,"Combos activos"),b.Nb(),b.Nb(),b.Ob(32,"div",19),b.Ob(33,"div",20),b.Ob(34,"table",21),b.Ob(35,"thead"),b.Ob(36,"tr"),b.Ob(37,"th",22),b.rc(38," Porcentaje "),b.Nb(),b.Ob(39,"th",22),b.rc(40," C\xf3digo "),b.Nb(),b.Ob(41,"th",22),b.rc(42," Identificador "),b.Nb(),b.Ob(43,"th",23),b.rc(44," Acci\xf3n "),b.Nb(),b.Nb(),b.Nb(),b.Ob(45,"tbody"),b.qc(46,te,12,4,"tr",24),b.Nb(),b.Nb(),b.Nb(),b.Kb(47,"app-pagination"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.xb(12),b.cc("ngModel",t.coupon.discountPercentage),b.xb(5),b.cc("ngModel",t.coupon.code),b.xb(5),b.cc("ngModel",t.coupon.title),b.xb(3),b.cc("icon","save"),b.xb(21),b.cc("ngForOf",t.coupons))},directives:[m.a,m.i,m.k,p.a,o.l,g.a],styles:[".input-group[_ngcontent-%COMP%]{display:block!important}.input-group[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%;max-width:100%}"]}),e})()},{path:"",pathMatch:"full",redirectTo:"usuarios"}]}];let oe=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[n.j.forChild(re)],n.j]}),e})();var ne=r("PCNd");let ie=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[o.c,oe,ne.a]]}),e})()}}]);