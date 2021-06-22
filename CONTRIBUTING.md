Welcome to `project-mirai/docs`

感谢你以任何方式为 mirai文档 做出的任何贡献

# Edit docs

mirai 系列文档并不直接存放在该仓库, 如果需要编辑文档内容, 请前往主仓库 `mamoe/mirai`, `mamoe/mirai-console` 或更多相关仓库

# 项目结构

- `/files-sha.txt`: sha1 表, 自动填充, 用于判断是否需要重新部署文档
- `/calc-sha1.sh`: 计算 `/docs` 的 sha1, 并输入至 `/files-sha1-rebuilt.txt`
- `/package.json`, `/yarn.lock`: VuePress 依赖
- `/rend-doc.sh`: 第一版生成文档的 `shell` 脚本, 不再使用
- `/src`: 用于检查文档更新的 `NodeJs` 运行脚本
  - `/main.js`: 主程序入口点, 完成自动文档更新, sha1 更新
  - `/config.js`: 配置文件, 可在 `/config-local.js` 覆盖默认配置
  - `/locations.js`: 仓库位置对照表 (1)
  - `/nav.js`: 主导航栏配置
  - `/repositories.js`: 需要进行更新的仓库列表 (2)
  - `/vuepress-conf.js`: 用于 vuepress 的配置文件 (`.vuepress/config.js`)
  - `/types.d.ts`: JS 类型定义
  - `/hooks/template.js`: 仓库文档补丁文件模板
  - `/hooks/*.js`: 仓库补丁文件, 使用的补丁在 `repositories.js` 定义

(1): `/src/locations.js` 文件格式
```js
module.exports = {
    'mamoe/mirai': 'E:/IDEAProjects/mirai',
};
```

(2): `/src/repositories.js`
```js
module.exports = [
    // [主仓库, 分支名, 文档在仓库的位置, vuepress文档位置, patch位置(src/hooks/%s.js)],
    [
        "mamoe/mirai",  // 仓库名字, 格式为 `$owner/$name`
        "dev",          // 文档所在的分支名字, 如 `master`
        "docs",         // 文档所在的文件夹名字, 如果为 undefined 则不进行复制文件
        "",             // 文档复制到 vuepress 构建工作区的相对位置, 如果  module.exports[][2] 为 undefined 则此值无作用
        undefined       // 文档补丁位置 (src/hooks/%s.js), 如果补丁不存在则无效果
    ],
    // ...
];
```

# 在本地构建副本

编辑 `src/config-local.js`, 输入以下片段
```js
module.exports = {
    // ...
    deploy: {
        enabled: false,
        // ...
    },
    // ...
};
```

然后在 `sh`/`git-bash`/`cmd`(如果`PATH`环境变量中存在`sh`时可以使用) 中键入 `node src/main.js` 构建本地预览副本

构建文档位置: `docs/.vuepress/dist/`

## 预览

下载一个 `nginx` 或其他 `HTTP Server`, 把 `docs/.vuepress/dist/` 桥接至 `http://localhost` (或者什么别的地方, 需要放在根目录), 然后就能预览了

不要直接双击打开构建出来的文档, 直接以文件方式打开是会错乱的
