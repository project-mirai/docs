import{_ as e,o as i,c as l,d as n}from"./app.ee64db30.js";const t={},a=n('<h1 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h1><h2 id="\u4E8B\u4EF6\u5217\u8868\u4E00\u89C8" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5217\u8868\u4E00\u89C8" aria-hidden="true">#</a> \u4E8B\u4EF6\u5217\u8868\u4E00\u89C8</h2><p>\u63D0\u793A:</p><ul><li>\u5728 IntelliJ \u5E73\u53F0\u53CC\u51FB shift \u53EF\u8F93\u5165\u7C7B\u540D\u8FDB\u884C\u5168\u5C40\u641C\u7D22</li><li>\u5728 IntelliJ \u5E73\u53F0, \u6309 alt + 7 \u53EF\u6253\u5F00\u6587\u4EF6\u7684\u7ED3\u6784, <a href="/.github/EZSLAB%60K@YFFOW47%7B090W8B.png">\u6548\u679C\u56FE</a></li></ul><h3 id="bot" tabindex="-1"><a class="header-anchor" href="#bot" aria-hidden="true">#</a> Bot</h3><ul><li>Bot \u767B\u5F55\u5B8C\u6210: BotOnlineEvent</li><li>Bot \u79BB\u7EBF: BotOfflineEvent <ul><li>\u4E3B\u52A8: Active</li><li>\u88AB\u6324\u4E0B\u7EBF: Force</li><li>\u88AB\u670D\u52A1\u5668\u65AD\u5F00\u6216\u56E0\u7F51\u7EDC\u95EE\u9898\u800C\u6389\u7EBF: Dropped</li><li>\u670D\u52A1\u5668\u4E3B\u52A8\u8981\u6C42\u66F4\u6362\u53E6\u4E00\u4E2A\u670D\u52A1\u5668: RequireReconnect</li></ul></li><li>Bot \u91CD\u65B0\u767B\u5F55: BotReloginEvent</li><li>Bot \u5934\u50CF\u6539\u53D8: BotAvatarChangedEvent</li><li>Bot \u6635\u79F0\u6539\u53D8: BotNickChangedEvent</li><li>Bot \u88AB\u6233: BotNudgedEvent</li></ul><h3 id="\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F" aria-hidden="true">#</a> \u6D88\u606F</h3><ul><li>\u88AB\u52A8\u6536\u5230\u6D88\u606F\uFF1AMessageEvent <ul><li>\u7FA4\u6D88\u606F\uFF1AGroupMessageEvent</li><li>\u597D\u53CB\u6D88\u606F\uFF1AFriendMessageEvent</li><li>\u7FA4\u4E34\u65F6\u4F1A\u8BDD\u6D88\u606F\uFF1AGroupTempMessageEvent</li><li>\u964C\u751F\u4EBA\u6D88\u606F\uFF1AStrangerMessageEvent</li><li>\u5176\u4ED6\u5BA2\u6237\u7AEF\u6D88\u606F\uFF1AOtherClientMessageEvent</li></ul></li><li>\u4E3B\u52A8\u53D1\u9001\u6D88\u606F\u524D: MessagePreSendEvent <ul><li>\u7FA4\u6D88\u606F: GroupMessagePreSendEvent</li><li>\u597D\u53CB\u6D88\u606F: FriendMessagePreSendEvent</li><li>\u7FA4\u4E34\u65F6\u4F1A\u8BDD\u6D88\u606F: GroupTempMessagePreSendEvent</li><li>\u964C\u751F\u4EBA\u6D88\u606F\uFF1AStrangerMessagePreSendEvent</li><li>\u5176\u4ED6\u5BA2\u6237\u7AEF\u6D88\u606F\uFF1AOtherClientMessagePreSendEvent</li></ul></li><li>\u4E3B\u52A8\u53D1\u9001\u6D88\u606F\u540E: MessagePostSendEvent <ul><li>\u7FA4\u6D88\u606F: GroupMessagePostSendEvent</li><li>\u597D\u53CB\u6D88\u606F: FriendMessagePostSendEvent</li><li>\u7FA4\u4E34\u65F6\u4F1A\u8BDD\u6D88\u606F: GroupTempMessagePostSendEvent</li><li>\u964C\u751F\u4EBA\u6D88\u606F\uFF1AStrangerMessagePostSendEvent</li><li>\u5176\u4ED6\u5BA2\u6237\u7AEF\u6D88\u606F\uFF1AOtherClientMessagePostSendEvent</li></ul></li><li>\u6D88\u606F\u64A4\u56DE: MessageRecallEvent <ul><li>\u597D\u53CB\u64A4\u56DE: FriendRecall</li><li>\u7FA4\u64A4\u56DE: GroupRecall</li><li>\u7FA4\u4E34\u65F6\u4F1A\u8BDD\u64A4\u56DE: TempRecall</li></ul></li><li>\u56FE\u7247\u4E0A\u4F20\u524D: BeforeImageUploadEvent</li><li>\u56FE\u7247\u4E0A\u4F20\u5B8C\u6210: ImageUploadEvent <ul><li>\u56FE\u7247\u4E0A\u4F20\u6210\u529F: Succeed</li><li>\u56FE\u7247\u4E0A\u4F20\u5931\u8D25: Failed</li></ul></li><li>\u6233\u4E00\u6233: NudgeEvent</li></ul><h3 id="\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u7FA4" aria-hidden="true">#</a> \u7FA4</h3><ul><li>\u673A\u5668\u4EBA\u88AB\u8E22\u51FA\u7FA4\u6216\u5728\u5176\u4ED6\u5BA2\u6237\u7AEF\u4E3B\u52A8\u9000\u51FA\u4E00\u4E2A\u7FA4: BotLeaveEvent <ul><li>\u673A\u5668\u4EBA\u4E3B\u52A8\u9000\u51FA\u4E00\u4E2A\u7FA4: Active</li><li>\u673A\u5668\u4EBA\u88AB\u7BA1\u7406\u5458\u6216\u7FA4\u4E3B\u8E22\u51FA\u7FA4: Kick</li></ul></li><li>\u673A\u5668\u4EBA\u5728\u7FA4\u91CC\u7684\u6743\u9650\u88AB\u6539\u53D8: BotGroupPermissionChangeEvent</li><li>\u673A\u5668\u4EBA\u88AB\u7981\u8A00: BotMuteEvent</li><li>\u673A\u5668\u4EBA\u88AB\u53D6\u6D88\u7981\u8A00: BotUnmuteEvent</li><li>\u673A\u5668\u4EBA\u6210\u529F\u52A0\u5165\u4E86\u4E00\u4E2A\u65B0\u7FA4: BotJoinGroupEvent</li></ul><h4 id="\u7FA4\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7FA4\u8BBE\u7F6E" aria-hidden="true">#</a> \u7FA4\u8BBE\u7F6E</h4><ul><li>\u7FA4\u8BBE\u7F6E\u6539\u53D8: GroupSettingChangeEvent <ul><li>\u7FA4\u540D\u6539\u53D8: GroupNameChangeEvent</li><li>\u5165\u7FA4\u516C\u544A\u6539\u53D8: GroupEntranceAnnouncementChangeEvent</li><li>\u5168\u5458\u7981\u8A00\u72B6\u6001\u6539\u53D8: GroupMuteAllEvent</li><li>\u533F\u540D\u804A\u5929\u72B6\u6001\u6539\u53D8: GroupAllowAnonymousChatEvent</li><li>\u5141\u8BB8\u7FA4\u5458\u9080\u8BF7\u597D\u53CB\u52A0\u7FA4\u72B6\u6001\u6539\u53D8: GroupAllowMemberInviteEvent</li></ul></li></ul><h4 id="\u7FA4\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u7FA4\u6210\u5458" aria-hidden="true">#</a> \u7FA4\u6210\u5458</h4><h5 id="\u6210\u5458\u5217\u8868\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u6210\u5458\u5217\u8868\u53D8\u66F4" aria-hidden="true">#</a> \u6210\u5458\u5217\u8868\u53D8\u66F4</h5><ul><li><p>\u6210\u5458\u5DF2\u7ECF\u52A0\u5165\u7FA4: MemberJoinEvent</p><ul><li>\u6210\u5458\u88AB\u9080\u8BF7\u52A0\u5165\u7FA4: Invite</li><li>\u6210\u5458\u4E3B\u52A8\u52A0\u5165\u7FA4: Active</li></ul></li><li><p>\u6210\u5458\u5DF2\u7ECF\u79BB\u5F00\u7FA4: MemberLeaveEvent</p><ul><li>\u6210\u5458\u88AB\u8E22\u51FA\u7FA4: Kick</li><li>\u6210\u5458\u4E3B\u52A8\u79BB\u5F00\u7FA4: Quit</li></ul></li><li><p>\u4E00\u4E2A\u8D26\u53F7\u8BF7\u6C42\u52A0\u5165\u7FA4: MemberJoinRequestEvent</p></li><li><p>\u673A\u5668\u4EBA\u88AB\u9080\u8BF7\u52A0\u5165\u7FA4: BotInvitedJoinGroupRequestEvent</p></li></ul><h5 id="\u540D\u7247\u548C\u5934\u8854" tabindex="-1"><a class="header-anchor" href="#\u540D\u7247\u548C\u5934\u8854" aria-hidden="true">#</a> \u540D\u7247\u548C\u5934\u8854</h5><ul><li>\u6210\u5458\u7FA4\u540D\u7247\u6539\u52A8: MemberCardChangeEvent</li><li>\u6210\u5458\u7FA4\u7279\u6B8A\u5934\u8854\u6539\u52A8: MemberSpecialTitleChangeEvent</li></ul><h5 id="\u6210\u5458\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6210\u5458\u6743\u9650" aria-hidden="true">#</a> \u6210\u5458\u6743\u9650</h5><ul><li>\u6210\u5458\u6743\u9650\u6539\u53D8: MemberPermissionChangeEvent</li></ul><h5 id="\u52A8\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u52A8\u4F5C" aria-hidden="true">#</a> \u52A8\u4F5C</h5><ul><li>\u7FA4\u6210\u5458\u88AB\u7981\u8A00: MemberMuteEvent</li><li>\u7FA4\u6210\u5458\u88AB\u53D6\u6D88\u7981\u8A00: MemberUnmuteEvent</li></ul><h3 id="\u597D\u53CB" tabindex="-1"><a class="header-anchor" href="#\u597D\u53CB" aria-hidden="true">#</a> \u597D\u53CB</h3><ul><li>\u597D\u53CB\u6635\u79F0\u6539\u53D8: FriendRemarkChangeEvent</li><li>\u6210\u529F\u6DFB\u52A0\u4E86\u4E00\u4E2A\u65B0\u597D\u53CB: FriendAddEvent</li><li>\u597D\u53CB\u5DF2\u88AB\u5220\u9664: FriendDeleteEvent</li><li>\u4E00\u4E2A\u8D26\u53F7\u8BF7\u6C42\u6DFB\u52A0\u673A\u5668\u4EBA\u4E3A\u597D\u53CB: NewFriendRequestEvent</li><li>\u597D\u53CB\u5934\u50CF\u6539\u53D8: FriendAvatarChangedEvent</li><li>\u597D\u53CB\u6635\u79F0\u6539\u53D8: FriendNickChangedEvent</li><li>\u597D\u53CB\u8F93\u5165\u72B6\u6001\u6539\u53D8: FriendInputStatusChangedEvent</li></ul>',23),r=[a];function d(h,s){return i(),l("div",null,r)}var o=e(t,[["render",d],["__file","EventList.html.vue"]]);export{o as default};
