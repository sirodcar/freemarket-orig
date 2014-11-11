// Scripts that allow for localization within each page using i18next

		var resources = {
		  en: { translation: { 
    "menu_home": "Home",
    "menu_buy": "Buy",
    "menu_sell": "Sell",
    "menu_view_all": "View All Items",
    "menu_search_title": "Search by Title",
    "menu_search_category": "Search by Category",
    "menu_search_tag": "Search by Tag",
    "menu_search_seller": "Search by Seller ID",
    "menu_search_item": "Search by Item ID",
    "menu_view_purchases": "View Your Purchases",
    "menu_list_new": "List New Item",
    "menu_view_items": "View Your Items",
    "menu_login_button": "Log In",
    "menu_login_text": "Log in to store your secret phrase.",
    "menu_login": "Log In",
    "header_login": "Log In",
    "login_welcome": "You may optionally log in to FreeMarket to store your secret phrase and see your account balance. Enter your account's secret phrase below.",
    "secret_phrase": "Secret Phrase",
    "placeholder_required": "required",
    "placeholder_optional": "optional",
    "tag1": "tag 1",
    "tag2": "tag 2",
    "tag3": "tag 3",
    "image1": "image 1",
    "image2": "image 2",
    "image3": "image 3",
    "shipping_method_name": "Shipping Method Name",
    "shipping_address_required": "A shipping address is required. Be sure to include all relevant information, such as your country. Your shipping address will be encrypted.",
    "shipping_cost_in_nxt": "Shipping Cost in NXT",
    "button_login": "Log In",
    "header_current_account_info": "Current Account Information",
    "account_id": "Account ID",
    "numeric_account_id": "Numeric Account ID",
    "change_account_text": "If you wish to change the NXT account you are using with FreeMarket, you may do so by entering the account's secret phrase below.",
    "button_change_account_id": "Change Account ID",
    "button_log_out": "Log Out",
    "header_list_new_item": "List New Item",
    "item_title": "Item Title",
    "category": "Category",
    "price": "Price",
    "main_image_url": "Main Image URL",
    "description": "Description",
    "decsription_field": "300 chars max",
    "optional_item_tags": "Optional Item Tags",
    "optional_additional_image_urls": "Optional Additional Image URLs",
    "optional_shipping_methods": "Optional Shipping Methods",
    "button_post_item": "Post Item",
    "header_log_in_required": "Log In Required",
    "log_in_notice_text": "This function requires you to be logged in. Please enter your account's secret phrase below.",
    "header_search_by_category": "Search by Item Category",
    "image": "Image",
    "status": "Status",
    "header_search_by_item_id": "Search by Item ID",
    "header_search_by_item_title": "Search by Item Title",
    "item_id": "Item ID",
    "button_search": "Search",
    "button_back_to_search": "Back to Search",
    "seller_id": "Seller ID",
    "price_with_nxt": " Price: NXT ",
    "expiration": "Expires",
    "tags": "Tags",
    "shipping_address": "Shipping Address",
	"shipping_method": "Shipping Method",
    "message_to_seller": "Message to Seller",
    "message_from_buyer": "Message from Buyer",
    "message_to_buyer": "Message to Buyer",
    "placeholder_message_to_buyer": "Optional. Your message will be encrypted.",
    "placeholder_message_to_seller": "Optional. Your message will be encrypted.",
    "button_buy_for_nxt": "Buy for NXT",
    "header_search_by_seller_id": "Search by Seller ID",
    "header_search_by_tag": "Search by Tag",
    "header_all_items": "All Items",
    "header_all_your_items": "All Your Items",
    "header_all_your_purchases": "All Your Purchases",
    "buyer_id": "Buyer ID",
    "sold_date": "Sold",
	"amount_received": "Amount Received",
	"button_cancel_listing": "Cancel Listing",
	"button_finalize_purchase": "Finalize Purchase",
	"button_reject_purchase": "Reject Purchase"
		   } },
		  zh: { translation: { 
    "menu_home": "首页",
    "menu_buy": "购买",
    "menu_sell": "出售",
    "menu_view_all": "查看所有商品",
    "menu_search_title": "通过名称搜索",
    "menu_search_category": "通过类别搜索",
    "menu_search_tag": "通过标签搜索",
    "menu_search_seller": "通过卖方ID搜索",
    "menu_search_item": "通过商品ID搜索",
    "menu_view_purchases": "查看您的购买",
    "menu_list_new": "列出新的商品",
    "menu_view_items": "查看您的商品",
    "menu_login_button": "登陆",
    "menu_login_text": "登陆并保存您的密码",
    "menu_login": "登陆",
    "header_login": "登陆",
    "login_welcome": "您可以选择登陆自由市场来保存您的密码并查看您的账户余额。在下面输入您的账户密码。",
    "secret_phrase": "密码",
    "placeholder_required": "必须的",
    "placeholder_optional": "可选择的",
    "tag1": "标签1",
    "tag2": "标签2",
    "tag3": "标签3",
    "image1": "图片1",
    "image2": "图片2",
    "image3": "图片3",
    "shipping_method_name": "运送方式名称",
    "shipping_address_required": "需要填写运送地址。确保包含所有有关的信息，例如您的国家。您的运送地址是加密的。",
    "shipping_cost_in_nxt": "以NXT计的运送费用",
    "button_login": "登陆",
    "header_current_account_info": "目前账户信息",
    "account_id": "账户ID",
    "numeric_account_id": "数字账户ID",
    "change_account_text": "如果您想要修改正在使用的自由市场的账号，您可能需要在下面输入账户密码。",
    "button_change_account_id": "修改账户ID",
    "button_log_out": "登出",
    "header_list_new_item": "列出新的商品",
    "item_title": "商品名称",
    "category": "类别",
    "price": "价格",
    "main_image_url": "主要图片URL",
    "description": "描述",
    "decsription_field": "300 chars max",
    "optional_item_tags": "可选择的商品标签",
    "optional_additional_image_urls": "可选择的图片URLs",
    "optional_shipping_methods": "可选择的运送方式",
    "button_post_item": "发布商品",
    "header_log_in_required": "需要登录",
    "log_in_notice_text": "该功能需要您登陆。请在下面输入您的账户密码。",
    "header_search_by_category": "通过商品类别搜索",
    "image": "图片",
    "status": "状态",
    "header_search_by_item_id": "通过商品ID搜索",
    "header_search_by_item_title": "通过商品名称搜索",
    "item_id": "商品ID数字",
    "button_search": "搜索",
    "button_back_to_search": "返回到搜索",
    "seller_id": "卖方ID",
    "price_with_nxt": " 价格: NXT ",
    "expiration": "过期时间",
	"tags": "标签",
	"shipping_address": "运输地址",
	"shipping_method": "运送方式",
	"message_to_seller": "给卖方发送信息",
	"message_from_buyer": "来自买方的信息",
	"message_to_buyer": "给买家的信息",
    "placeholder_message_to_buyer": "可选择的。您的信息将加密。",
    "placeholder_message_to_seller": "可选择的。您的信息将加密。",
	"button_buy_for_nxt": "用NXT购买",
	"header_search_by_seller_id": "通过卖方ID搜索",
	"header_search_by_tag": "通过标签搜索",
	"header_all_items": "所有商品",
	"header_all_your_items": "您的所有商品",
	"header_all_your_purchases": "查看您的购买",
	"buyer_id": "买方ID",
	"sold_date": "出售",
	"amount_received": "收到的数目",
	"button_cancel_listing": "取消列表",
	"button_finalize_purchase": "完成购买",
	"button_reject_purchase": "拒绝购买"
		  } }
		};    
        $.i18n.init({
            fallbackLng: "en",
            lowerCaseLng: true,
            detectLngFromLocalStorage: true,
			resStore: resources,        
			debug: false
        }, function() {
            $("[data-i18n]").i18n();
        });
