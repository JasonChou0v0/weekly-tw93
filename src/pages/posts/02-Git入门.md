---
date: 2024/01/19
---

<img src="https://raw.githubusercontent.com/JasonChou0v0/weekly-tw93/main/public/assets/202401200010083.JPEG" width="800" />

<small>封面来源于去年五月在长沙玩的时候，夜晚的杜甫江阁别具特色，长沙夜市的小吃还是忘不掉，不知道下次去又是什么时候。</small>

> **记录日常生活以及技术相关内容，觉得不错可关注此专栏，方便获取更新通知**


### **创建本地**

- 初始化一个空的git仓库

```bash
git init
```

- 将所有文件添加到暂存区

```bash
git add .
```

- 将暂存区的文件提交到本地仓库

```bash
git commit -m first commit
```

### **创建远程**

```bash
git config --global user.name "zhouzhou"
git config --global user.email "zhouzhou.chn@foxmail.com"
```

- 配置链接ssh

```bash
ssh-keygen -t rsa -C zhouzhou.chn@foxmail.com
```

- 获取当前生成的ssh

```bash
clip < ~/.ssh/id_rsa.pub
```

### **关联仓库**

- 将本地仓库和远程仓库关联起来

```bash
git remote add origin git@github.com:Zhouzhou-chn/notion-Blog.git
```

- 查看当前的远程仓库地址

```bash
git remote -v
```

### **本地=>远程**

- 推送到远程仓库

```bash
git push -u origin master
```

- 刷新github网站上的仓库页面即可看到效果

### **相关问题**

1.fatal: remote origin already exists

- 移除再重新关联库即可

```bash
git remote rm origin
```

2.git push错误failed to push some refs to

- 本地远程异同

```bash
git pull --rebase origin master
```

3.could not open directory ‘lib/wrapper/****services/‘: Filename too long

```bash
git config --system core.longpaths true
```
