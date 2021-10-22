/**
 * Tool 工具介绍卡片类型
 */
export interface ToolCard {
  title: string;
  description: string;
  cover: string;
  link: string;
}

/**
 * ToolDetail 工具介绍平铺图文类型
 */
export interface ToolDetail {
  cover: string;
  title: string;
  description: string;
}

/**
 * ToolLayout 工具介绍页布局所需数据类型
 */
export interface ToolLayout {
  video: string;
  cover: string;
  title: string;
  description: string;
  link: string;
  details: Array<ToolDetail>;
}
