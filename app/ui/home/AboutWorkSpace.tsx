export default function AboutWorkSpace() {
  return (
    <div className="w-[45%] flex flex-col items-start justify-center mb-20">
      <h1 className="text-3xl font-semibold text-gray-600 mb-4">
        ✈️关于本工作台：
      </h1>
      <p className="indent-8 text-gray-400">
        本工作台有<span className="text-global font-bold mx-1">mCell</span>
        开发运营，是一个公开的个人项目。有
        <span className="text-global ml-1 font-semibold">博客录</span>、
        <span className="text-global font-semibold">作品集</span>、
        <span className="text-global font-semibold">Bot</span>、
        <span className="text-global mr-1 font-semibold">有话说</span>
        四个模块，欢迎大家体验访问~
      </p>
      <ul className="list-disc list-inside p-2">
        <li className="mt-2 text-gray-500">
          <span className="font-semibold">博客录：</span>
          📃主要是一些技术文章，主要是大前端相关内容，当然也有其他的内容
        </li>
        <li className="mt-2 text-gray-600">
          <span className="font-semibold">作品集：</span>
          🗃️这里主要展示一些个人项目（也可能是一些小工具🛠️）或者参与的开源项目
        </li>
        <li className="mt-2 text-gray-700">
          <span className="font-semibold">Bot：</span>
          它叫BotCell，基于GLM-4模型搭建，是个饶有风趣的🤖。【Bot的语音转文字需要🪜】
        </li>
        <li className="mt-2 text-gray-800">
          <span className="font-semibold">有话说：</span>
          这是一个开放的模块，大家注册/登录之后都可以留言，欢迎留言🦜~
        </li>
      </ul>
      <div className="border-l-4 border-gray-300 mt-4 pl-2 text-gray-900">
        👨🏻‍💻持续维护，更多内容敬请期待🥰~
      </div>
    </div>
  );
}
