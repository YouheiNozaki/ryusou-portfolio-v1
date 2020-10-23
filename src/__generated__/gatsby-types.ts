/* eslint-disable */

declare namespace GatsbyTypes {
  type Maybe<T> = T | undefined;
  type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
  };
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: string;
    JSON: never;
  };

  type BooleanQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Boolean']>;
    readonly ne: Maybe<Scalars['Boolean']>;
    readonly in: Maybe<
      ReadonlyArray<Maybe<Scalars['Boolean']>>
    >;
    readonly nin: Maybe<
      ReadonlyArray<Maybe<Scalars['Boolean']>>
    >;
  };

  type DateQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Date']>;
    readonly ne: Maybe<Scalars['Date']>;
    readonly gt: Maybe<Scalars['Date']>;
    readonly gte: Maybe<Scalars['Date']>;
    readonly lt: Maybe<Scalars['Date']>;
    readonly lte: Maybe<Scalars['Date']>;
    readonly in: Maybe<
      ReadonlyArray<Maybe<Scalars['Date']>>
    >;
    readonly nin: Maybe<
      ReadonlyArray<Maybe<Scalars['Date']>>
    >;
  };

  type Directory = Node & {
    readonly sourceInstanceName: Scalars['String'];
    readonly absolutePath: Scalars['String'];
    readonly relativePath: Scalars['String'];
    readonly extension: Scalars['String'];
    readonly size: Scalars['Int'];
    readonly prettySize: Scalars['String'];
    readonly modifiedTime: Scalars['Date'];
    readonly accessTime: Scalars['Date'];
    readonly changeTime: Scalars['Date'];
    readonly birthTime: Scalars['Date'];
    readonly root: Scalars['String'];
    readonly dir: Scalars['String'];
    readonly base: Scalars['String'];
    readonly ext: Scalars['String'];
    readonly name: Scalars['String'];
    readonly relativeDirectory: Scalars['String'];
    readonly dev: Scalars['Int'];
    readonly mode: Scalars['Int'];
    readonly nlink: Scalars['Int'];
    readonly uid: Scalars['Int'];
    readonly gid: Scalars['Int'];
    readonly rdev: Scalars['Int'];
    readonly ino: Scalars['Float'];
    readonly atimeMs: Scalars['Float'];
    readonly mtimeMs: Scalars['Float'];
    readonly ctimeMs: Scalars['Float'];
    readonly atime: Scalars['Date'];
    readonly mtime: Scalars['Date'];
    readonly ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>;
    readonly blksize: Maybe<Scalars['Int']>;
    readonly blocks: Maybe<Scalars['Int']>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Directory_modifiedTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_accessTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_changeTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_birthTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_atimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_mtimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_ctimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type DirectoryConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<DirectoryGroupConnection>;
  };

  type DirectoryConnection_distinctArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: DirectoryFieldsEnum;
  };

  type DirectoryEdge = {
    readonly next: Maybe<Directory>;
    readonly node: Directory;
    readonly previous: Maybe<Directory>;
  };

  enum DirectoryFieldsEnum {
    sourceInstanceName = 'sourceInstanceName',
    absolutePath = 'absolutePath',
    relativePath = 'relativePath',
    extension = 'extension',
    size = 'size',
    prettySize = 'prettySize',
    modifiedTime = 'modifiedTime',
    accessTime = 'accessTime',
    changeTime = 'changeTime',
    birthTime = 'birthTime',
    root = 'root',
    dir = 'dir',
    base = 'base',
    ext = 'ext',
    name = 'name',
    relativeDirectory = 'relativeDirectory',
    dev = 'dev',
    mode = 'mode',
    nlink = 'nlink',
    uid = 'uid',
    gid = 'gid',
    rdev = 'rdev',
    ino = 'ino',
    atimeMs = 'atimeMs',
    mtimeMs = 'mtimeMs',
    ctimeMs = 'ctimeMs',
    atime = 'atime',
    mtime = 'mtime',
    ctime = 'ctime',
    birthtime = 'birthtime',
    birthtimeMs = 'birthtimeMs',
    blksize = 'blksize',
    blocks = 'blocks',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type DirectoryFilterInput = {
    readonly sourceInstanceName: Maybe<
      StringQueryOperatorInput
    >;
    readonly absolutePath: Maybe<StringQueryOperatorInput>;
    readonly relativePath: Maybe<StringQueryOperatorInput>;
    readonly extension: Maybe<StringQueryOperatorInput>;
    readonly size: Maybe<IntQueryOperatorInput>;
    readonly prettySize: Maybe<StringQueryOperatorInput>;
    readonly modifiedTime: Maybe<DateQueryOperatorInput>;
    readonly accessTime: Maybe<DateQueryOperatorInput>;
    readonly changeTime: Maybe<DateQueryOperatorInput>;
    readonly birthTime: Maybe<DateQueryOperatorInput>;
    readonly root: Maybe<StringQueryOperatorInput>;
    readonly dir: Maybe<StringQueryOperatorInput>;
    readonly base: Maybe<StringQueryOperatorInput>;
    readonly ext: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly relativeDirectory: Maybe<
      StringQueryOperatorInput
    >;
    readonly dev: Maybe<IntQueryOperatorInput>;
    readonly mode: Maybe<IntQueryOperatorInput>;
    readonly nlink: Maybe<IntQueryOperatorInput>;
    readonly uid: Maybe<IntQueryOperatorInput>;
    readonly gid: Maybe<IntQueryOperatorInput>;
    readonly rdev: Maybe<IntQueryOperatorInput>;
    readonly ino: Maybe<FloatQueryOperatorInput>;
    readonly atimeMs: Maybe<FloatQueryOperatorInput>;
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
    readonly atime: Maybe<DateQueryOperatorInput>;
    readonly mtime: Maybe<DateQueryOperatorInput>;
    readonly ctime: Maybe<DateQueryOperatorInput>;
    readonly birthtime: Maybe<DateQueryOperatorInput>;
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly blksize: Maybe<IntQueryOperatorInput>;
    readonly blocks: Maybe<IntQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type DirectoryGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type DirectorySortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<DirectoryFieldsEnum>>
    >;
    readonly order: Maybe<
      ReadonlyArray<Maybe<SortOrderEnum>>
    >;
  };

  type DuotoneGradient = {
    readonly highlight: Scalars['String'];
    readonly shadow: Scalars['String'];
    readonly opacity: Maybe<Scalars['Int']>;
  };

  type File = Node & {
    readonly sourceInstanceName: Scalars['String'];
    readonly absolutePath: Scalars['String'];
    readonly relativePath: Scalars['String'];
    readonly extension: Scalars['String'];
    readonly size: Scalars['Int'];
    readonly prettySize: Scalars['String'];
    readonly modifiedTime: Scalars['Date'];
    readonly accessTime: Scalars['Date'];
    readonly changeTime: Scalars['Date'];
    readonly birthTime: Scalars['Date'];
    readonly root: Scalars['String'];
    readonly dir: Scalars['String'];
    readonly base: Scalars['String'];
    readonly ext: Scalars['String'];
    readonly name: Scalars['String'];
    readonly relativeDirectory: Scalars['String'];
    readonly dev: Scalars['Int'];
    readonly mode: Scalars['Int'];
    readonly nlink: Scalars['Int'];
    readonly uid: Scalars['Int'];
    readonly gid: Scalars['Int'];
    readonly rdev: Scalars['Int'];
    readonly ino: Scalars['Float'];
    readonly atimeMs: Scalars['Float'];
    readonly mtimeMs: Scalars['Float'];
    readonly ctimeMs: Scalars['Float'];
    readonly atime: Scalars['Date'];
    readonly mtime: Scalars['Date'];
    readonly ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>;
    readonly blksize: Maybe<Scalars['Int']>;
    readonly blocks: Maybe<Scalars['Int']>;
    /** Copy file to static directory and return public url to it */
    readonly publicURL: Maybe<Scalars['String']>;
    readonly childImageSharp: Maybe<ImageSharp>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type File_modifiedTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_accessTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_changeTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_birthTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_atimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_mtimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_ctimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type FileConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<FileEdge>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<FileGroupConnection>;
  };

  type FileConnection_distinctArgs = {
    field: FileFieldsEnum;
  };

  type FileConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: FileFieldsEnum;
  };

  type FileEdge = {
    readonly next: Maybe<File>;
    readonly node: File;
    readonly previous: Maybe<File>;
  };

  enum FileFieldsEnum {
    sourceInstanceName = 'sourceInstanceName',
    absolutePath = 'absolutePath',
    relativePath = 'relativePath',
    extension = 'extension',
    size = 'size',
    prettySize = 'prettySize',
    modifiedTime = 'modifiedTime',
    accessTime = 'accessTime',
    changeTime = 'changeTime',
    birthTime = 'birthTime',
    root = 'root',
    dir = 'dir',
    base = 'base',
    ext = 'ext',
    name = 'name',
    relativeDirectory = 'relativeDirectory',
    dev = 'dev',
    mode = 'mode',
    nlink = 'nlink',
    uid = 'uid',
    gid = 'gid',
    rdev = 'rdev',
    ino = 'ino',
    atimeMs = 'atimeMs',
    mtimeMs = 'mtimeMs',
    ctimeMs = 'ctimeMs',
    atime = 'atime',
    mtime = 'mtime',
    ctime = 'ctime',
    birthtime = 'birthtime',
    birthtimeMs = 'birthtimeMs',
    blksize = 'blksize',
    blocks = 'blocks',
    publicURL = 'publicURL',
    childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
    childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
    childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
    childImageSharp___fixed___width = 'childImageSharp.fixed.width',
    childImageSharp___fixed___height = 'childImageSharp.fixed.height',
    childImageSharp___fixed___src = 'childImageSharp.fixed.src',
    childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
    childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
    childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
    childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
    childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
    childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
    childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
    childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
    childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
    childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
    childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
    childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
    childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
    childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
    childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
    childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
    childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
    childImageSharp___fluid___src = 'childImageSharp.fluid.src',
    childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
    childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
    childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
    childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
    childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
    childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
    childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
    childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
    childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
    childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
    childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
    childImageSharp___sizes___src = 'childImageSharp.sizes.src',
    childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
    childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
    childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
    childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
    childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
    childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
    childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
    childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
    childImageSharp___original___width = 'childImageSharp.original.width',
    childImageSharp___original___height = 'childImageSharp.original.height',
    childImageSharp___original___src = 'childImageSharp.original.src',
    childImageSharp___resize___src = 'childImageSharp.resize.src',
    childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
    childImageSharp___resize___width = 'childImageSharp.resize.width',
    childImageSharp___resize___height = 'childImageSharp.resize.height',
    childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
    childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
    childImageSharp___id = 'childImageSharp.id',
    childImageSharp___parent___id = 'childImageSharp.parent.id',
    childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
    childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
    childImageSharp___parent___children = 'childImageSharp.parent.children',
    childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
    childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
    childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
    childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
    childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
    childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
    childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
    childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
    childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
    childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
    childImageSharp___children = 'childImageSharp.children',
    childImageSharp___children___id = 'childImageSharp.children.id',
    childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
    childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
    childImageSharp___children___children = 'childImageSharp.children.children',
    childImageSharp___children___children___id = 'childImageSharp.children.children.id',
    childImageSharp___children___children___children = 'childImageSharp.children.children.children',
    childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
    childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
    childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
    childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
    childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
    childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
    childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
    childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
    childImageSharp___internal___content = 'childImageSharp.internal.content',
    childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
    childImageSharp___internal___description = 'childImageSharp.internal.description',
    childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
    childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
    childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
    childImageSharp___internal___owner = 'childImageSharp.internal.owner',
    childImageSharp___internal___type = 'childImageSharp.internal.type',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type FileFilterInput = {
    readonly sourceInstanceName: Maybe<
      StringQueryOperatorInput
    >;
    readonly absolutePath: Maybe<StringQueryOperatorInput>;
    readonly relativePath: Maybe<StringQueryOperatorInput>;
    readonly extension: Maybe<StringQueryOperatorInput>;
    readonly size: Maybe<IntQueryOperatorInput>;
    readonly prettySize: Maybe<StringQueryOperatorInput>;
    readonly modifiedTime: Maybe<DateQueryOperatorInput>;
    readonly accessTime: Maybe<DateQueryOperatorInput>;
    readonly changeTime: Maybe<DateQueryOperatorInput>;
    readonly birthTime: Maybe<DateQueryOperatorInput>;
    readonly root: Maybe<StringQueryOperatorInput>;
    readonly dir: Maybe<StringQueryOperatorInput>;
    readonly base: Maybe<StringQueryOperatorInput>;
    readonly ext: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly relativeDirectory: Maybe<
      StringQueryOperatorInput
    >;
    readonly dev: Maybe<IntQueryOperatorInput>;
    readonly mode: Maybe<IntQueryOperatorInput>;
    readonly nlink: Maybe<IntQueryOperatorInput>;
    readonly uid: Maybe<IntQueryOperatorInput>;
    readonly gid: Maybe<IntQueryOperatorInput>;
    readonly rdev: Maybe<IntQueryOperatorInput>;
    readonly ino: Maybe<FloatQueryOperatorInput>;
    readonly atimeMs: Maybe<FloatQueryOperatorInput>;
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
    readonly atime: Maybe<DateQueryOperatorInput>;
    readonly mtime: Maybe<DateQueryOperatorInput>;
    readonly ctime: Maybe<DateQueryOperatorInput>;
    readonly birthtime: Maybe<DateQueryOperatorInput>;
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly blksize: Maybe<IntQueryOperatorInput>;
    readonly blocks: Maybe<IntQueryOperatorInput>;
    readonly publicURL: Maybe<StringQueryOperatorInput>;
    readonly childImageSharp: Maybe<ImageSharpFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type FileGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<FileEdge>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type FileSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<FileFieldsEnum>>
    >;
    readonly order: Maybe<
      ReadonlyArray<Maybe<SortOrderEnum>>
    >;
  };

  type FloatQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Float']>;
    readonly ne: Maybe<Scalars['Float']>;
    readonly gt: Maybe<Scalars['Float']>;
    readonly gte: Maybe<Scalars['Float']>;
    readonly lt: Maybe<Scalars['Float']>;
    readonly lte: Maybe<Scalars['Float']>;
    readonly in: Maybe<
      ReadonlyArray<Maybe<Scalars['Float']>>
    >;
    readonly nin: Maybe<
      ReadonlyArray<Maybe<Scalars['Float']>>
    >;
  };

  enum ImageCropFocus {
    CENTER = 0,
    NORTH = 1,
    NORTHEAST = 5,
    EAST = 2,
    SOUTHEAST = 6,
    SOUTH = 3,
    SOUTHWEST = 7,
    WEST = 4,
    NORTHWEST = 8,
    ENTROPY = 16,
    ATTENTION = 17,
  }

  enum ImageFit {
    COVER = 'cover',
    CONTAIN = 'contain',
    FILL = 'fill',
    INSIDE = 'inside',
    OUTSIDE = 'outside',
  }

  enum ImageFormat {
    NO_CHANGE = '',
    JPG = 'jpg',
    PNG = 'png',
    WEBP = 'webp',
  }

  type ImageSharp = Node & {
    readonly fixed: Maybe<ImageSharpFixed>;
    /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
    readonly resolutions: Maybe<ImageSharpResolutions>;
    readonly fluid: Maybe<ImageSharpFluid>;
    /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
    readonly sizes: Maybe<ImageSharpSizes>;
    readonly original: Maybe<ImageSharpOriginal>;
    readonly resize: Maybe<ImageSharpResize>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type ImageSharp_fixedArgs = {
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharp_resolutionsArgs = {
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharp_fluidArgs = {
    maxWidth: Maybe<Scalars['Int']>;
    maxHeight: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<
      ReadonlyArray<Maybe<Scalars['Int']>>
    >;
  };

  type ImageSharp_sizesArgs = {
    maxWidth: Maybe<Scalars['Int']>;
    maxHeight: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<
      ReadonlyArray<Maybe<Scalars['Int']>>
    >;
  };

  type ImageSharp_resizeArgs = {
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionLevel?: Maybe<Scalars['Int']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone: Maybe<DuotoneGradient>;
    base64?: Maybe<Scalars['Boolean']>;
    traceSVG: Maybe<Potrace>;
    toFormat?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharpConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<
      ImageSharpGroupConnection
    >;
  };

  type ImageSharpConnection_distinctArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpEdge = {
    readonly next: Maybe<ImageSharp>;
    readonly node: ImageSharp;
    readonly previous: Maybe<ImageSharp>;
  };

  enum ImageSharpFieldsEnum {
    fixed___base64 = 'fixed.base64',
    fixed___tracedSVG = 'fixed.tracedSVG',
    fixed___aspectRatio = 'fixed.aspectRatio',
    fixed___width = 'fixed.width',
    fixed___height = 'fixed.height',
    fixed___src = 'fixed.src',
    fixed___srcSet = 'fixed.srcSet',
    fixed___srcWebp = 'fixed.srcWebp',
    fixed___srcSetWebp = 'fixed.srcSetWebp',
    fixed___originalName = 'fixed.originalName',
    resolutions___base64 = 'resolutions.base64',
    resolutions___tracedSVG = 'resolutions.tracedSVG',
    resolutions___aspectRatio = 'resolutions.aspectRatio',
    resolutions___width = 'resolutions.width',
    resolutions___height = 'resolutions.height',
    resolutions___src = 'resolutions.src',
    resolutions___srcSet = 'resolutions.srcSet',
    resolutions___srcWebp = 'resolutions.srcWebp',
    resolutions___srcSetWebp = 'resolutions.srcSetWebp',
    resolutions___originalName = 'resolutions.originalName',
    fluid___base64 = 'fluid.base64',
    fluid___tracedSVG = 'fluid.tracedSVG',
    fluid___aspectRatio = 'fluid.aspectRatio',
    fluid___src = 'fluid.src',
    fluid___srcSet = 'fluid.srcSet',
    fluid___srcWebp = 'fluid.srcWebp',
    fluid___srcSetWebp = 'fluid.srcSetWebp',
    fluid___sizes = 'fluid.sizes',
    fluid___originalImg = 'fluid.originalImg',
    fluid___originalName = 'fluid.originalName',
    fluid___presentationWidth = 'fluid.presentationWidth',
    fluid___presentationHeight = 'fluid.presentationHeight',
    sizes___base64 = 'sizes.base64',
    sizes___tracedSVG = 'sizes.tracedSVG',
    sizes___aspectRatio = 'sizes.aspectRatio',
    sizes___src = 'sizes.src',
    sizes___srcSet = 'sizes.srcSet',
    sizes___srcWebp = 'sizes.srcWebp',
    sizes___srcSetWebp = 'sizes.srcSetWebp',
    sizes___sizes = 'sizes.sizes',
    sizes___originalImg = 'sizes.originalImg',
    sizes___originalName = 'sizes.originalName',
    sizes___presentationWidth = 'sizes.presentationWidth',
    sizes___presentationHeight = 'sizes.presentationHeight',
    original___width = 'original.width',
    original___height = 'original.height',
    original___src = 'original.src',
    resize___src = 'resize.src',
    resize___tracedSVG = 'resize.tracedSVG',
    resize___width = 'resize.width',
    resize___height = 'resize.height',
    resize___aspectRatio = 'resize.aspectRatio',
    resize___originalName = 'resize.originalName',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type ImageSharpFilterInput = {
    readonly fixed: Maybe<ImageSharpFixedFilterInput>;
    readonly resolutions: Maybe<
      ImageSharpResolutionsFilterInput
    >;
    readonly fluid: Maybe<ImageSharpFluidFilterInput>;
    readonly sizes: Maybe<ImageSharpSizesFilterInput>;
    readonly original: Maybe<ImageSharpOriginalFilterInput>;
    readonly resize: Maybe<ImageSharpResizeFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type ImageSharpFixed = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Maybe<Scalars['Float']>;
    readonly width: Scalars['Float'];
    readonly height: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
  };

  type ImageSharpFixedFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpFluid = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly sizes: Scalars['String'];
    readonly originalImg: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
    readonly presentationWidth: Scalars['Int'];
    readonly presentationHeight: Scalars['Int'];
  };

  type ImageSharpFluidFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly sizes: Maybe<StringQueryOperatorInput>;
    readonly originalImg: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
    readonly presentationWidth: Maybe<
      IntQueryOperatorInput
    >;
    readonly presentationHeight: Maybe<
      IntQueryOperatorInput
    >;
  };

  type ImageSharpGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type ImageSharpOriginal = {
    readonly width: Maybe<Scalars['Float']>;
    readonly height: Maybe<Scalars['Float']>;
    readonly src: Maybe<Scalars['String']>;
  };

  type ImageSharpOriginalFilterInput = {
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResize = {
    readonly src: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly width: Maybe<Scalars['Int']>;
    readonly height: Maybe<Scalars['Int']>;
    readonly aspectRatio: Maybe<Scalars['Float']>;
    readonly originalName: Maybe<Scalars['String']>;
  };

  type ImageSharpResizeFilterInput = {
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly width: Maybe<IntQueryOperatorInput>;
    readonly height: Maybe<IntQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResolutions = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Maybe<Scalars['Float']>;
    readonly width: Scalars['Float'];
    readonly height: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
  };

  type ImageSharpResolutionsFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpSizes = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly sizes: Scalars['String'];
    readonly originalImg: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
    readonly presentationWidth: Scalars['Int'];
    readonly presentationHeight: Scalars['Int'];
  };

  type ImageSharpSizesFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly sizes: Maybe<StringQueryOperatorInput>;
    readonly originalImg: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
    readonly presentationWidth: Maybe<
      IntQueryOperatorInput
    >;
    readonly presentationHeight: Maybe<
      IntQueryOperatorInput
    >;
  };

  type ImageSharpSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<ImageSharpFieldsEnum>>
    >;
    readonly order: Maybe<
      ReadonlyArray<Maybe<SortOrderEnum>>
    >;
  };

  type ImgixFixed = {
    readonly base64: Scalars['String'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Scalars['String'];
    readonly srcSetWebp: Scalars['String'];
    readonly sizes: Scalars['String'];
    readonly width: Scalars['Int'];
    readonly height: Scalars['Int'];
  };

  type ImgixFixedFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly sizes: Maybe<StringQueryOperatorInput>;
    readonly width: Maybe<IntQueryOperatorInput>;
    readonly height: Maybe<IntQueryOperatorInput>;
  };

  type ImgixFluid = {
    readonly base64: Scalars['String'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Scalars['String'];
    readonly srcSetWebp: Scalars['String'];
    readonly sizes: Scalars['String'];
    readonly aspectRatio: Scalars['Float'];
  };

  type ImgixFluidFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly sizes: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  };

  type ImgixImage = {
    readonly url: Maybe<Scalars['String']>;
    readonly fixed: Maybe<ImgixFixed>;
    readonly fluid: Maybe<ImgixFluid>;
  };

  type ImgixImage_urlArgs = {
    imgixParams?: Maybe<ImgixUrlParamsInput>;
  };

  type ImgixImage_fixedArgs = {
    width?: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    imgixParams?: Maybe<ImgixUrlParamsInput>;
    placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
  };

  type ImgixImage_fluidArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight: Maybe<Scalars['Int']>;
    srcSetBreakpoints: Maybe<
      ReadonlyArray<Maybe<Scalars['Int']>>
    >;
    imgixParams?: Maybe<ImgixUrlParamsInput>;
    placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
  };

  type ImgixImageFilterInput = {
    readonly url: Maybe<StringQueryOperatorInput>;
    readonly fixed: Maybe<ImgixFixedFilterInput>;
    readonly fluid: Maybe<ImgixFluidFilterInput>;
  };

  type ImgixUrlParamsInput = {
    /** Specifies an aspect ratio to maintain when resizing and cropping the image. */
    readonly ar: Maybe<Scalars['String']>;
    /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
    readonly auto: Maybe<Scalars['String']>;
    /**
     * Colors the background of padded and partially-transparent images. Default:
     * `fff`. [See docs](https://docs.imgix.com/apis/url/bg).
     */
    readonly bg: Maybe<Scalars['String']>;
    /**
     * Changes the blend alignment relative to the parent image. [See
     * docs](https://docs.imgix.com/apis/url/blending/blend-align).
     */
    readonly blendAlign: Maybe<Scalars['String']>;
    /** Alias for `blendAlign`. */
    readonly blendalign: Maybe<Scalars['String']>;
    /** Alias for `blendAlign`. */
    readonly ba: Maybe<Scalars['String']>;
    /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
    readonly blendAlpha: Maybe<Scalars['Int']>;
    /** Alias for `blendAlpha`. */
    readonly blendalpha: Maybe<Scalars['Int']>;
    /** Alias for `blendAlpha`. */
    readonly balph: Maybe<Scalars['Int']>;
    /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
    readonly blendColor: Maybe<Scalars['String']>;
    /** Alias for `blendColor`. */
    readonly blendcolor: Maybe<Scalars['String']>;
    /** Alias for `blendColor`. */
    readonly blendClr: Maybe<Scalars['String']>;
    /** Alias for `blendColor`. */
    readonly blendclr: Maybe<Scalars['String']>;
    /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
    readonly blendCrop: Maybe<Scalars['String']>;
    /** Alias for `blendCrop`. */
    readonly blendcrop: Maybe<Scalars['String']>;
    /** Alias for `blendCrop`. */
    readonly bc: Maybe<Scalars['String']>;
    /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
    readonly blendFit: Maybe<Scalars['String']>;
    /** Alias for `blendFit`. */
    readonly blendfit: Maybe<Scalars['String']>;
    /** Alias for `blendFit`. */
    readonly bf: Maybe<Scalars['String']>;
    /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
    readonly blendH: Maybe<Scalars['Int']>;
    /** Alias for `blendH`. */
    readonly blendh: Maybe<Scalars['Int']>;
    /** Alias for `blendH`. */
    readonly bh: Maybe<Scalars['Int']>;
    /**
     * Sets the blend mode for a blend image. Default: `overlay`. [See
     * docs](https://docs.imgix.com/apis/url/blending/blend-mode).
     */
    readonly blendMode: Maybe<Scalars['String']>;
    /** Alias for `blendMode`. */
    readonly blendmode: Maybe<Scalars['String']>;
    /** Alias for `blendMode`. */
    readonly bm: Maybe<Scalars['String']>;
    /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
    readonly blendPad: Maybe<Scalars['Int']>;
    /** Alias for `blendPad`. */
    readonly blendpad: Maybe<Scalars['Int']>;
    /** Alias for `blendPad`. */
    readonly bp: Maybe<Scalars['Int']>;
    /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
    readonly blendSize: Maybe<Scalars['String']>;
    /** Alias for `blendSize`. */
    readonly blendsize: Maybe<Scalars['String']>;
    /** Alias for `blendSize`. */
    readonly bs: Maybe<Scalars['String']>;
    /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
    readonly blendW: Maybe<Scalars['Int']>;
    /** Alias for `blendW`. */
    readonly blendw: Maybe<Scalars['Int']>;
    /** Alias for `blendW`. */
    readonly bw: Maybe<Scalars['Int']>;
    /**
     * Adjusts the x-offset of the blend image relative to its parent. Default: `0`.
     * [See docs](https://docs.imgix.com/apis/url/blending/blend-x).
     */
    readonly blendX: Maybe<Scalars['Int']>;
    /** Alias for `blendX`. */
    readonly blendx: Maybe<Scalars['Int']>;
    /** Alias for `blendX`. */
    readonly bx: Maybe<Scalars['Int']>;
    /**
     * Adjusts the y-offset of the blend image relative to its parent. Default: `0`.
     * [See docs](https://docs.imgix.com/apis/url/blending/blend-y).
     */
    readonly blendY: Maybe<Scalars['Int']>;
    /** Alias for `blendY`. */
    readonly blendy: Maybe<Scalars['Int']>;
    /** Alias for `blendY`. */
    readonly by: Maybe<Scalars['Int']>;
    /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
    readonly blend: Maybe<Scalars['String']>;
    /** Alias for `blend`. */
    readonly b: Maybe<Scalars['String']>;
    /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
    readonly blur: Maybe<Scalars['Int']>;
    /**
     * Sets the inner radius of the image's border in pixels. [See
     * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner).
     */
    readonly borderRadiusInner: Maybe<Scalars['String']>;
    /**
     * Sets the outer radius of the image's border in pixels. [See
     * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius).
     */
    readonly borderRadius: Maybe<Scalars['String']>;
    /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
    readonly border: Maybe<Scalars['String']>;
    /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
    readonly bri: Maybe<Scalars['Int']>;
    /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
    readonly ch: Maybe<Scalars['String']>;
    /**
     * Specifies the output chroma subsampling rate. Default: `420`. [See
     * docs](https://docs.imgix.com/apis/url/format/chromasub).
     */
    readonly chromasub: Maybe<Scalars['Int']>;
    /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
    readonly colorquant: Maybe<Scalars['Int']>;
    /**
     * Specifies how many colors to include in a palette-extraction response.
     * Default: `6`. [See
     * docs](https://docs.imgix.com/apis/url/color-palette/colors).
     */
    readonly colors: Maybe<Scalars['Int']>;
    /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
    readonly con: Maybe<Scalars['Int']>;
    /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
    readonly cornerRadius: Maybe<Scalars['String']>;
    /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
    readonly crop: Maybe<Scalars['String']>;
    /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
    readonly cs: Maybe<Scalars['String']>;
    /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
    readonly dl: Maybe<Scalars['String']>;
    /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
    readonly dpi: Maybe<Scalars['Int']>;
    /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
    readonly dpr: Maybe<Scalars['Float']>;
    /**
     * Changes the alpha of the duotone effect atop the source image. Default: `100`.
     * [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha).
     */
    readonly duotoneAlpha: Maybe<Scalars['Int']>;
    /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
    readonly duotone: Maybe<Scalars['String']>;
    /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
    readonly exp: Maybe<Scalars['Int']>;
    /**
     * A Unix timestamp specifying a UTC time. Requests made to this URL after that
     * time will output a 404 status code. [See
     * docs](https://docs.imgix.com/apis/url/expires).
     */
    readonly expires: Maybe<Scalars['String']>;
    /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
    readonly faceindex: Maybe<Scalars['Int']>;
    /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
    readonly facepad: Maybe<Scalars['Float']>;
    /**
     * Specifies that face data should be included in output when combined with
     * `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces).
     */
    readonly faces: Maybe<Scalars['Int']>;
    /**
     * Sets the fill color for images with additional space created by the fit
     * setting. Default: `fff`. [See
     * docs](https://docs.imgix.com/apis/url/fill/fill-color).
     */
    readonly fillColor: Maybe<Scalars['String']>;
    /** Alias for `fillColor`. */
    readonly fillcolor: Maybe<Scalars['String']>;
    /**
     * Determines how to fill in additional space created by the fit setting. [See
     * docs](https://docs.imgix.com/apis/url/fill/fill).
     */
    readonly fill: Maybe<Scalars['String']>;
    /**
     * Specifies how to map the source image to the output image dimensions. Default:
     * `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit).
     */
    readonly fit: Maybe<Scalars['String']>;
    /** Alias for `fit`. */
    readonly f: Maybe<Scalars['String']>;
    /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
    readonly flip: Maybe<Scalars['String']>;
    /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
    readonly fm: Maybe<Scalars['String']>;
    /**
     * Displays crosshairs identifying the location of the set focal point. Default:
     * `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug).
     */
    readonly fpDebug: Maybe<Scalars['Boolean']>;
    /**
     * Sets the relative horizontal value for the focal point of an image. [See
     * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x).
     */
    readonly fpX: Maybe<Scalars['Int']>;
    /**
     * Sets the relative vertical value for the focal point of an image. [See
     * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y).
     */
    readonly fpY: Maybe<Scalars['Int']>;
    /**
     * Sets the relative zoom value for the focal point of an image. [See
     * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z).
     */
    readonly fpZ: Maybe<Scalars['Int']>;
    /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
    readonly gam: Maybe<Scalars['Int']>;
    /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
    readonly h: Maybe<Scalars['Int']>;
    /** Alias for `h`. */
    readonly height: Maybe<Scalars['Int']>;
    /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
    readonly high: Maybe<Scalars['Int']>;
    /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
    readonly htn: Maybe<Scalars['Int']>;
    /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
    readonly hue: Maybe<Scalars['Int']>;
    /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
    readonly invert: Maybe<Scalars['Boolean']>;
    /** Alias for `invert`. */
    readonly inv: Maybe<Scalars['Boolean']>;
    /**
     * Specifies that the output image should be a lossless variant. Default:
     * `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless).
     */
    readonly lossless: Maybe<Scalars['Boolean']>;
    /**
     * Changes the watermark alignment relative to the parent image. [See
     * docs](https://docs.imgix.com/apis/url/watermark/mark-align).
     */
    readonly markAlign: Maybe<Scalars['String']>;
    /** Alias for `markAlign`. */
    readonly ma: Maybe<Scalars['String']>;
    /** Alias for `markAlign`. */
    readonly markalign: Maybe<Scalars['String']>;
    /**
     * Changes the alpha of the watermark image. Default: `100`. [See
     * docs](https://docs.imgix.com/apis/url/watermark/mark-alpha).
     */
    readonly markAlpha: Maybe<Scalars['Int']>;
    /** Alias for `markAlpha`. */
    readonly markalpha: Maybe<Scalars['Int']>;
    /** Alias for `markAlpha`. */
    readonly malph: Maybe<Scalars['Int']>;
    /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
    readonly markBase: Maybe<Scalars['String']>;
    /** Alias for `markBase`. */
    readonly mb: Maybe<Scalars['String']>;
    /** Alias for `markBase`. */
    readonly markbase: Maybe<Scalars['String']>;
    /**
     * Specifies the fit mode for watermark images. Default: `clip`. [See
     * docs](https://docs.imgix.com/apis/url/watermark/mark-fit).
     */
    readonly markFit: Maybe<Scalars['String']>;
    /** Alias for `markFit`. */
    readonly mf: Maybe<Scalars['String']>;
    /** Alias for `markFit`. */
    readonly markfit: Maybe<Scalars['String']>;
    /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
    readonly markH: Maybe<Scalars['Int']>;
    /** Alias for `markH`. */
    readonly mh: Maybe<Scalars['Int']>;
    /** Alias for `markH`. */
    readonly markh: Maybe<Scalars['Int']>;
    /** Applies padding to the watermark image. Default: `10`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
    readonly markPad: Maybe<Scalars['Int']>;
    /** Alias for `markPad`. */
    readonly mp: Maybe<Scalars['Int']>;
    /** Alias for `markPad`. */
    readonly markpad: Maybe<Scalars['Int']>;
    /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
    readonly markScale: Maybe<Scalars['Int']>;
    /** Alias for `markScale`. */
    readonly ms: Maybe<Scalars['Int']>;
    /** Alias for `markScale`. */
    readonly markscale: Maybe<Scalars['Int']>;
    /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
    readonly markW: Maybe<Scalars['Int']>;
    /** Alias for `markW`. */
    readonly mw: Maybe<Scalars['Int']>;
    /** Alias for `markW`. */
    readonly markw: Maybe<Scalars['Int']>;
    /**
     * Adjusts the x-offset of the watermark image relative to its parent. [See
     * docs](https://docs.imgix.com/apis/url/watermark/mark-x).
     */
    readonly markX: Maybe<Scalars['Int']>;
    /** Alias for `markX`. */
    readonly mx: Maybe<Scalars['Int']>;
    /** Alias for `markX`. */
    readonly markx: Maybe<Scalars['Int']>;
    /**
     * Adjusts the y-offset of the watermark image relative to its parent. [See
     * docs](https://docs.imgix.com/apis/url/watermark/mark-y).
     */
    readonly markY: Maybe<Scalars['Int']>;
    /** Alias for `markY`. */
    readonly my: Maybe<Scalars['Int']>;
    /** Alias for `markY`. */
    readonly marky: Maybe<Scalars['Int']>;
    /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
    readonly mark: Maybe<Scalars['String']>;
    /** Alias for `mark`. */
    readonly m: Maybe<Scalars['String']>;
    /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
    readonly mask: Maybe<Scalars['String']>;
    /**
     * Colors the background of the transparent mask area of images. Default: `fff`.
     * [See docs](https://docs.imgix.com/apis/url/mask/mask-bg).
     */
    readonly maskbg: Maybe<Scalars['String']>;
    /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
    readonly maxH: Maybe<Scalars['Int']>;
    /** Alias for `maxH`. */
    readonly maxHeight: Maybe<Scalars['Int']>;
    /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
    readonly maxW: Maybe<Scalars['Int']>;
    /** Alias for `maxW`. */
    readonly maxWidth: Maybe<Scalars['Int']>;
    /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
    readonly minH: Maybe<Scalars['Int']>;
    /** Alias for `minH`. */
    readonly minHeight: Maybe<Scalars['Int']>;
    /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
    readonly minW: Maybe<Scalars['Int']>;
    /** Alias for `minW`. */
    readonly minWidth: Maybe<Scalars['Int']>;
    /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
    readonly monochrome: Maybe<Scalars['String']>;
    /** Alias for `monochrome`. */
    readonly mono: Maybe<Scalars['String']>;
    /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
    readonly nr: Maybe<Scalars['Int']>;
    /**
     * Provides a threshold by which to sharpen an image. Default: `20`. [See
     * docs](https://docs.imgix.com/apis/url/noise-reduction/nrs).
     */
    readonly nrs: Maybe<Scalars['Int']>;
    /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
    readonly orient: Maybe<Scalars['Int']>;
    /** Alias for `orient`. */
    readonly or: Maybe<Scalars['Int']>;
    /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
    readonly pad: Maybe<Scalars['Int']>;
    /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf-page-number). */
    readonly page: Maybe<Scalars['Int']>;
    /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
    readonly palette: Maybe<Scalars['String']>;
    /**
     * Specifies a CSS prefix for all classes in palette-extraction. Default:
     * `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix).
     */
    readonly prefix: Maybe<Scalars['String']>;
    /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
    readonly px: Maybe<Scalars['Int']>;
    /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
    readonly q: Maybe<Scalars['Int']>;
    /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
    readonly rect: Maybe<Scalars['String']>;
    /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
    readonly rot: Maybe<Scalars['Float']>;
    /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
    readonly sat: Maybe<Scalars['Int']>;
    /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
    readonly sepia: Maybe<Scalars['Int']>;
    /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
    readonly shad: Maybe<Scalars['Float']>;
    /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
    readonly sharp: Maybe<Scalars['Float']>;
    /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
    readonly trimColor: Maybe<Scalars['String']>;
    /** Alias for `trimColor`. */
    readonly trimcolor: Maybe<Scalars['String']>;
    /**
     * Specifies the mean difference on a trim operation. Default: `11`. [See
     * docs](https://docs.imgix.com/apis/url/trim/trim-md).
     */
    readonly trimMd: Maybe<Scalars['Float']>;
    /** Alias for `trimMd`. */
    readonly trimmd: Maybe<Scalars['Float']>;
    /**
     * Pads the area of the source image before trimming. Default: `0`. [See
     * docs](https://docs.imgix.com/apis/url/trim/trim-pad).
     */
    readonly trimPad: Maybe<Scalars['Int']>;
    /** Alias for `trimPad`. */
    readonly trimpad: Maybe<Scalars['Int']>;
    /**
     * Specifies the standard deviation on a trim operation. Default: `10`. [See
     * docs](https://docs.imgix.com/apis/url/trim/trim-sd).
     */
    readonly trimSd: Maybe<Scalars['Float']>;
    /** Alias for `trimSd`. */
    readonly trimsd: Maybe<Scalars['Float']>;
    /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
    readonly trimTol: Maybe<Scalars['Float']>;
    /** Alias for `trimTol`. */
    readonly trimtol: Maybe<Scalars['Float']>;
    /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
    readonly trim: Maybe<Scalars['String']>;
    /**
     * Sets the vertical and horizontal alignment of rendered text relative to the
     * base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align).
     */
    readonly txtAlign: Maybe<Scalars['String']>;
    /** Alias for `txtAlign`. */
    readonly txtalign: Maybe<Scalars['String']>;
    /** Alias for `txtAlign`. */
    readonly ta: Maybe<Scalars['String']>;
    /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
    readonly txtClip: Maybe<Scalars['String']>;
    /** Alias for `txtClip`. */
    readonly txtclip: Maybe<Scalars['String']>;
    /** Alias for `txtClip`. */
    readonly tcl: Maybe<Scalars['String']>;
    /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
    readonly txtColor: Maybe<Scalars['String']>;
    /** Alias for `txtColor`. */
    readonly txtcolor: Maybe<Scalars['String']>;
    /** Alias for `txtColor`. */
    readonly txtClr: Maybe<Scalars['String']>;
    /** Alias for `txtColor`. */
    readonly txtclr: Maybe<Scalars['String']>;
    /** Alias for `txtColor`. */
    readonly tc: Maybe<Scalars['String']>;
    /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
    readonly txtFit: Maybe<Scalars['String']>;
    /** Alias for `txtFit`. */
    readonly txtfit: Maybe<Scalars['String']>;
    /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
    readonly txtFont: Maybe<Scalars['String']>;
    /** Alias for `txtFont`. */
    readonly tf: Maybe<Scalars['String']>;
    /** Alias for `txtFont`. */
    readonly txtfont: Maybe<Scalars['String']>;
    /**
     * Sets the leading (line spacing) for rendered text. Only works on the
     * multi-line text endpoint. Default: `0`. [See
     * docs](https://docs.imgix.com/apis/url/typesetting/txt-lead).
     */
    readonly txtLead: Maybe<Scalars['Int']>;
    /** Alias for `txtLead`. */
    readonly txtlead: Maybe<Scalars['Int']>;
    /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
    readonly txtLig: Maybe<Scalars['Int']>;
    /** Alias for `txtLig`. */
    readonly txtlig: Maybe<Scalars['Int']>;
    /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
    readonly txtLineColor: Maybe<Scalars['String']>;
    /** Alias for `txtLineColor`. */
    readonly txtlinecolor: Maybe<Scalars['String']>;
    /** Alias for `txtLineColor`. */
    readonly txtLineClr: Maybe<Scalars['String']>;
    /** Alias for `txtLineColor`. */
    readonly txtlineclr: Maybe<Scalars['String']>;
    /**
     * Outlines the rendered text with a specified color. Default: `0`. [See
     * docs](https://docs.imgix.com/apis/url/text/txt-line).
     */
    readonly txtLine: Maybe<Scalars['Int']>;
    /** Alias for `txtLine`. */
    readonly txtline: Maybe<Scalars['Int']>;
    /** Alias for `txtLine`. */
    readonly tl: Maybe<Scalars['Int']>;
    /**
     * Specifies the padding (in device-independent pixels) between a textbox and the
     * edges of the base image. [See
     * docs](https://docs.imgix.com/apis/url/text/txt-pad).
     */
    readonly txtPad: Maybe<Scalars['Int']>;
    /** Alias for `txtPad`. */
    readonly txtpad: Maybe<Scalars['Int']>;
    /** Alias for `txtPad`. */
    readonly tp: Maybe<Scalars['Int']>;
    /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
    readonly txtShad: Maybe<Scalars['Float']>;
    /** Alias for `txtShad`. */
    readonly txtshad: Maybe<Scalars['Float']>;
    /** Alias for `txtShad`. */
    readonly tsh: Maybe<Scalars['Float']>;
    /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
    readonly txtSize: Maybe<Scalars['Int']>;
    /** Alias for `txtSize`. */
    readonly tsz: Maybe<Scalars['Int']>;
    /** Alias for `txtSize`. */
    readonly txtsize: Maybe<Scalars['Int']>;
    /**
     * Sets the tracking (letter spacing) for rendered text. Only works on the
     * multi-line text endpoint. Default: `0`. [See
     * docs](https://docs.imgix.com/apis/url/typesetting/txt-track).
     */
    readonly txtTrack: Maybe<Scalars['Int']>;
    /** Alias for `txtTrack`. */
    readonly txttrack: Maybe<Scalars['Int']>;
    /** Alias for `txtTrack`. */
    readonly tt: Maybe<Scalars['Int']>;
    /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
    readonly txtWidth: Maybe<Scalars['Int']>;
    /** Alias for `txtWidth`. */
    readonly txtwidth: Maybe<Scalars['Int']>;
    /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
    readonly txt: Maybe<Scalars['String']>;
    /** Alias for `txt`. */
    readonly t: Maybe<Scalars['String']>;
    /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
    readonly usm: Maybe<Scalars['Int']>;
    /**
     * Specifies the radius for an unsharp mask operation. Default: `2.5`. [See
     * docs](https://docs.imgix.com/apis/url/adjustment/usmrad).
     */
    readonly usmrad: Maybe<Scalars['Float']>;
    /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
    readonly vib: Maybe<Scalars['Int']>;
    /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
    readonly w: Maybe<Scalars['Int']>;
    /** Alias for `w`. */
    readonly width: Maybe<Scalars['Int']>;
  };

  type Internal = {
    readonly content: Maybe<Scalars['String']>;
    readonly contentDigest: Scalars['String'];
    readonly description: Maybe<Scalars['String']>;
    readonly fieldOwners: Maybe<
      ReadonlyArray<Maybe<Scalars['String']>>
    >;
    readonly ignoreType: Maybe<Scalars['Boolean']>;
    readonly mediaType: Maybe<Scalars['String']>;
    readonly owner: Scalars['String'];
    readonly type: Scalars['String'];
  };

  type InternalFilterInput = {
    readonly content: Maybe<StringQueryOperatorInput>;
    readonly contentDigest: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly fieldOwners: Maybe<StringQueryOperatorInput>;
    readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
    readonly mediaType: Maybe<StringQueryOperatorInput>;
    readonly owner: Maybe<StringQueryOperatorInput>;
    readonly type: Maybe<StringQueryOperatorInput>;
  };

  type IntQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Int']>;
    readonly ne: Maybe<Scalars['Int']>;
    readonly gt: Maybe<Scalars['Int']>;
    readonly gte: Maybe<Scalars['Int']>;
    readonly lt: Maybe<Scalars['Int']>;
    readonly lte: Maybe<Scalars['Int']>;
    readonly in: Maybe<
      ReadonlyArray<Maybe<Scalars['Int']>>
    >;
    readonly nin: Maybe<
      ReadonlyArray<Maybe<Scalars['Int']>>
    >;
  };

  type MicrocmsPosts = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly createdAt: Maybe<Scalars['Date']>;
    readonly updatedAt: Maybe<Scalars['Date']>;
    readonly publishedAt: Maybe<Scalars['Date']>;
    readonly title: Maybe<Scalars['String']>;
    readonly tags: Maybe<
      ReadonlyArray<Maybe<MicrocmsPostsTags>>
    >;
    readonly day: Maybe<Scalars['Date']>;
    readonly image: Maybe<MicrocmsPostsImage>;
    readonly content: Maybe<Scalars['String']>;
    readonly postsId: Maybe<Scalars['String']>;
    readonly fields: Maybe<MicrocmsPostsFields>;
  };

  type MicrocmsPosts_createdAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsPosts_updatedAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsPosts_publishedAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsPosts_dayArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsPostsConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MicrocmsPostsEdge>;
    readonly nodes: ReadonlyArray<MicrocmsPosts>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<
      MicrocmsPostsGroupConnection
    >;
  };

  type MicrocmsPostsConnection_distinctArgs = {
    field: MicrocmsPostsFieldsEnum;
  };

  type MicrocmsPostsConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: MicrocmsPostsFieldsEnum;
  };

  type MicrocmsPostsEdge = {
    readonly next: Maybe<MicrocmsPosts>;
    readonly node: MicrocmsPosts;
    readonly previous: Maybe<MicrocmsPosts>;
  };

  type MicrocmsPostsFields = {
    readonly featuredImage: Maybe<ImgixImage>;
  };

  enum MicrocmsPostsFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    publishedAt = 'publishedAt',
    title = 'title',
    tags = 'tags',
    tags___id = 'tags.id',
    tags___createdAt = 'tags.createdAt',
    tags___updatedAt = 'tags.updatedAt',
    tags___publishedAt = 'tags.publishedAt',
    tags___name = 'tags.name',
    tags___slug = 'tags.slug',
    day = 'day',
    image___url = 'image.url',
    content = 'content',
    postsId = 'postsId',
    fields___featuredImage___url = 'fields.featuredImage.url',
    fields___featuredImage___fixed___base64 = 'fields.featuredImage.fixed.base64',
    fields___featuredImage___fixed___src = 'fields.featuredImage.fixed.src',
    fields___featuredImage___fixed___srcSet = 'fields.featuredImage.fixed.srcSet',
    fields___featuredImage___fixed___srcWebp = 'fields.featuredImage.fixed.srcWebp',
    fields___featuredImage___fixed___srcSetWebp = 'fields.featuredImage.fixed.srcSetWebp',
    fields___featuredImage___fixed___sizes = 'fields.featuredImage.fixed.sizes',
    fields___featuredImage___fixed___width = 'fields.featuredImage.fixed.width',
    fields___featuredImage___fixed___height = 'fields.featuredImage.fixed.height',
    fields___featuredImage___fluid___base64 = 'fields.featuredImage.fluid.base64',
    fields___featuredImage___fluid___src = 'fields.featuredImage.fluid.src',
    fields___featuredImage___fluid___srcSet = 'fields.featuredImage.fluid.srcSet',
    fields___featuredImage___fluid___srcWebp = 'fields.featuredImage.fluid.srcWebp',
    fields___featuredImage___fluid___srcSetWebp = 'fields.featuredImage.fluid.srcSetWebp',
    fields___featuredImage___fluid___sizes = 'fields.featuredImage.fluid.sizes',
    fields___featuredImage___fluid___aspectRatio = 'fields.featuredImage.fluid.aspectRatio',
  }

  type MicrocmsPostsFieldsFilterInput = {
    readonly featuredImage: Maybe<ImgixImageFilterInput>;
  };

  type MicrocmsPostsFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly createdAt: Maybe<DateQueryOperatorInput>;
    readonly updatedAt: Maybe<DateQueryOperatorInput>;
    readonly publishedAt: Maybe<DateQueryOperatorInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly tags: Maybe<MicrocmsPostsTagsFilterListInput>;
    readonly day: Maybe<DateQueryOperatorInput>;
    readonly image: Maybe<MicrocmsPostsImageFilterInput>;
    readonly content: Maybe<StringQueryOperatorInput>;
    readonly postsId: Maybe<StringQueryOperatorInput>;
    readonly fields: Maybe<MicrocmsPostsFieldsFilterInput>;
  };

  type MicrocmsPostsGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MicrocmsPostsEdge>;
    readonly nodes: ReadonlyArray<MicrocmsPosts>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type MicrocmsPostsImage = {
    readonly url: Maybe<Scalars['String']>;
  };

  type MicrocmsPostsImageFilterInput = {
    readonly url: Maybe<StringQueryOperatorInput>;
  };

  type MicrocmsPostsSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<MicrocmsPostsFieldsEnum>>
    >;
    readonly order: Maybe<
      ReadonlyArray<Maybe<SortOrderEnum>>
    >;
  };

  type MicrocmsPostsTags = {
    readonly id: Maybe<Scalars['String']>;
    readonly createdAt: Maybe<Scalars['Date']>;
    readonly updatedAt: Maybe<Scalars['Date']>;
    readonly publishedAt: Maybe<Scalars['Date']>;
    readonly name: Maybe<Scalars['String']>;
    readonly slug: Maybe<Scalars['String']>;
  };

  type MicrocmsPostsTags_createdAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsPostsTags_updatedAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsPostsTags_publishedAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsPostsTagsFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly createdAt: Maybe<DateQueryOperatorInput>;
    readonly updatedAt: Maybe<DateQueryOperatorInput>;
    readonly publishedAt: Maybe<DateQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
  };

  type MicrocmsPostsTagsFilterListInput = {
    readonly elemMatch: Maybe<MicrocmsPostsTagsFilterInput>;
  };

  type MicrocmsSkills = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly createdAt: Maybe<Scalars['Date']>;
    readonly updatedAt: Maybe<Scalars['Date']>;
    readonly title: Maybe<Scalars['String']>;
    readonly image: Maybe<MicrocmsSkillsImage>;
    readonly parameter: Maybe<Scalars['String']>;
    readonly skillsId: Maybe<Scalars['String']>;
    readonly fields: Maybe<MicrocmsSkillsFields>;
  };

  type MicrocmsSkills_createdAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsSkills_updatedAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsSkillsConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MicrocmsSkillsEdge>;
    readonly nodes: ReadonlyArray<MicrocmsSkills>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<
      MicrocmsSkillsGroupConnection
    >;
  };

  type MicrocmsSkillsConnection_distinctArgs = {
    field: MicrocmsSkillsFieldsEnum;
  };

  type MicrocmsSkillsConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: MicrocmsSkillsFieldsEnum;
  };

  type MicrocmsSkillsEdge = {
    readonly next: Maybe<MicrocmsSkills>;
    readonly node: MicrocmsSkills;
    readonly previous: Maybe<MicrocmsSkills>;
  };

  type MicrocmsSkillsFields = {
    readonly featuredImage: Maybe<ImgixImage>;
  };

  enum MicrocmsSkillsFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    title = 'title',
    image___url = 'image.url',
    parameter = 'parameter',
    skillsId = 'skillsId',
    fields___featuredImage___url = 'fields.featuredImage.url',
    fields___featuredImage___fixed___base64 = 'fields.featuredImage.fixed.base64',
    fields___featuredImage___fixed___src = 'fields.featuredImage.fixed.src',
    fields___featuredImage___fixed___srcSet = 'fields.featuredImage.fixed.srcSet',
    fields___featuredImage___fixed___srcWebp = 'fields.featuredImage.fixed.srcWebp',
    fields___featuredImage___fixed___srcSetWebp = 'fields.featuredImage.fixed.srcSetWebp',
    fields___featuredImage___fixed___sizes = 'fields.featuredImage.fixed.sizes',
    fields___featuredImage___fixed___width = 'fields.featuredImage.fixed.width',
    fields___featuredImage___fixed___height = 'fields.featuredImage.fixed.height',
    fields___featuredImage___fluid___base64 = 'fields.featuredImage.fluid.base64',
    fields___featuredImage___fluid___src = 'fields.featuredImage.fluid.src',
    fields___featuredImage___fluid___srcSet = 'fields.featuredImage.fluid.srcSet',
    fields___featuredImage___fluid___srcWebp = 'fields.featuredImage.fluid.srcWebp',
    fields___featuredImage___fluid___srcSetWebp = 'fields.featuredImage.fluid.srcSetWebp',
    fields___featuredImage___fluid___sizes = 'fields.featuredImage.fluid.sizes',
    fields___featuredImage___fluid___aspectRatio = 'fields.featuredImage.fluid.aspectRatio',
  }

  type MicrocmsSkillsFieldsFilterInput = {
    readonly featuredImage: Maybe<ImgixImageFilterInput>;
  };

  type MicrocmsSkillsFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly createdAt: Maybe<DateQueryOperatorInput>;
    readonly updatedAt: Maybe<DateQueryOperatorInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly image: Maybe<MicrocmsSkillsImageFilterInput>;
    readonly parameter: Maybe<StringQueryOperatorInput>;
    readonly skillsId: Maybe<StringQueryOperatorInput>;
    readonly fields: Maybe<MicrocmsSkillsFieldsFilterInput>;
  };

  type MicrocmsSkillsGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MicrocmsSkillsEdge>;
    readonly nodes: ReadonlyArray<MicrocmsSkills>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type MicrocmsSkillsImage = {
    readonly url: Maybe<Scalars['String']>;
  };

  type MicrocmsSkillsImageFilterInput = {
    readonly url: Maybe<StringQueryOperatorInput>;
  };

  type MicrocmsSkillsSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<MicrocmsSkillsFieldsEnum>>
    >;
    readonly order: Maybe<
      ReadonlyArray<Maybe<SortOrderEnum>>
    >;
  };

  type MicrocmsTags = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly createdAt: Maybe<Scalars['Date']>;
    readonly updatedAt: Maybe<Scalars['Date']>;
    readonly publishedAt: Maybe<Scalars['Date']>;
    readonly name: Maybe<Scalars['String']>;
    readonly slug: Maybe<Scalars['String']>;
    readonly tagsId: Maybe<Scalars['String']>;
  };

  type MicrocmsTags_createdAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsTags_updatedAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsTags_publishedAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsTagsConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MicrocmsTagsEdge>;
    readonly nodes: ReadonlyArray<MicrocmsTags>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<
      MicrocmsTagsGroupConnection
    >;
  };

  type MicrocmsTagsConnection_distinctArgs = {
    field: MicrocmsTagsFieldsEnum;
  };

  type MicrocmsTagsConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: MicrocmsTagsFieldsEnum;
  };

  type MicrocmsTagsEdge = {
    readonly next: Maybe<MicrocmsTags>;
    readonly node: MicrocmsTags;
    readonly previous: Maybe<MicrocmsTags>;
  };

  enum MicrocmsTagsFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    publishedAt = 'publishedAt',
    name = 'name',
    slug = 'slug',
    tagsId = 'tagsId',
  }

  type MicrocmsTagsFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly createdAt: Maybe<DateQueryOperatorInput>;
    readonly updatedAt: Maybe<DateQueryOperatorInput>;
    readonly publishedAt: Maybe<DateQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
    readonly tagsId: Maybe<StringQueryOperatorInput>;
  };

  type MicrocmsTagsGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MicrocmsTagsEdge>;
    readonly nodes: ReadonlyArray<MicrocmsTags>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type MicrocmsTagsSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<MicrocmsTagsFieldsEnum>>
    >;
    readonly order: Maybe<
      ReadonlyArray<Maybe<SortOrderEnum>>
    >;
  };

  type MicrocmsWorks = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly createdAt: Maybe<Scalars['Date']>;
    readonly updatedAt: Maybe<Scalars['Date']>;
    readonly publishedAt: Maybe<Scalars['Date']>;
    readonly image: Maybe<MicrocmsWorksImage>;
    readonly title: Maybe<Scalars['String']>;
    readonly url: Maybe<Scalars['String']>;
    readonly description: Maybe<Scalars['String']>;
    readonly tag: Maybe<
      ReadonlyArray<Maybe<MicrocmsWorksTag>>
    >;
    readonly worksId: Maybe<Scalars['String']>;
    readonly fields: Maybe<MicrocmsWorksFields>;
  };

  type MicrocmsWorks_createdAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsWorks_updatedAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsWorks_publishedAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsWorksConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MicrocmsWorksEdge>;
    readonly nodes: ReadonlyArray<MicrocmsWorks>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<
      MicrocmsWorksGroupConnection
    >;
  };

  type MicrocmsWorksConnection_distinctArgs = {
    field: MicrocmsWorksFieldsEnum;
  };

  type MicrocmsWorksConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: MicrocmsWorksFieldsEnum;
  };

  type MicrocmsWorksEdge = {
    readonly next: Maybe<MicrocmsWorks>;
    readonly node: MicrocmsWorks;
    readonly previous: Maybe<MicrocmsWorks>;
  };

  type MicrocmsWorksFields = {
    readonly featuredImage: Maybe<ImgixImage>;
  };

  enum MicrocmsWorksFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    publishedAt = 'publishedAt',
    image___url = 'image.url',
    title = 'title',
    url = 'url',
    description = 'description',
    tag = 'tag',
    tag___id = 'tag.id',
    tag___createdAt = 'tag.createdAt',
    tag___updatedAt = 'tag.updatedAt',
    tag___tag = 'tag.tag',
    worksId = 'worksId',
    fields___featuredImage___url = 'fields.featuredImage.url',
    fields___featuredImage___fixed___base64 = 'fields.featuredImage.fixed.base64',
    fields___featuredImage___fixed___src = 'fields.featuredImage.fixed.src',
    fields___featuredImage___fixed___srcSet = 'fields.featuredImage.fixed.srcSet',
    fields___featuredImage___fixed___srcWebp = 'fields.featuredImage.fixed.srcWebp',
    fields___featuredImage___fixed___srcSetWebp = 'fields.featuredImage.fixed.srcSetWebp',
    fields___featuredImage___fixed___sizes = 'fields.featuredImage.fixed.sizes',
    fields___featuredImage___fixed___width = 'fields.featuredImage.fixed.width',
    fields___featuredImage___fixed___height = 'fields.featuredImage.fixed.height',
    fields___featuredImage___fluid___base64 = 'fields.featuredImage.fluid.base64',
    fields___featuredImage___fluid___src = 'fields.featuredImage.fluid.src',
    fields___featuredImage___fluid___srcSet = 'fields.featuredImage.fluid.srcSet',
    fields___featuredImage___fluid___srcWebp = 'fields.featuredImage.fluid.srcWebp',
    fields___featuredImage___fluid___srcSetWebp = 'fields.featuredImage.fluid.srcSetWebp',
    fields___featuredImage___fluid___sizes = 'fields.featuredImage.fluid.sizes',
    fields___featuredImage___fluid___aspectRatio = 'fields.featuredImage.fluid.aspectRatio',
  }

  type MicrocmsWorksFieldsFilterInput = {
    readonly featuredImage: Maybe<ImgixImageFilterInput>;
  };

  type MicrocmsWorksFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly createdAt: Maybe<DateQueryOperatorInput>;
    readonly updatedAt: Maybe<DateQueryOperatorInput>;
    readonly publishedAt: Maybe<DateQueryOperatorInput>;
    readonly image: Maybe<MicrocmsWorksImageFilterInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly url: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly tag: Maybe<MicrocmsWorksTagFilterListInput>;
    readonly worksId: Maybe<StringQueryOperatorInput>;
    readonly fields: Maybe<MicrocmsWorksFieldsFilterInput>;
  };

  type MicrocmsWorksGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MicrocmsWorksEdge>;
    readonly nodes: ReadonlyArray<MicrocmsWorks>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type MicrocmsWorksImage = {
    readonly url: Maybe<Scalars['String']>;
  };

  type MicrocmsWorksImageFilterInput = {
    readonly url: Maybe<StringQueryOperatorInput>;
  };

  type MicrocmsWorksSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<MicrocmsWorksFieldsEnum>>
    >;
    readonly order: Maybe<
      ReadonlyArray<Maybe<SortOrderEnum>>
    >;
  };

  type MicrocmsWorksTag = {
    readonly id: Maybe<Scalars['String']>;
    readonly createdAt: Maybe<Scalars['Date']>;
    readonly updatedAt: Maybe<Scalars['Date']>;
    readonly tag: Maybe<Scalars['String']>;
  };

  type MicrocmsWorksTag_createdAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsWorksTag_updatedAtArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MicrocmsWorksTagFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly createdAt: Maybe<DateQueryOperatorInput>;
    readonly updatedAt: Maybe<DateQueryOperatorInput>;
    readonly tag: Maybe<StringQueryOperatorInput>;
  };

  type MicrocmsWorksTagFilterListInput = {
    readonly elemMatch: Maybe<MicrocmsWorksTagFilterInput>;
  };

  /** Node Interface */
  type Node = {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type NodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type NodeFilterListInput = {
    readonly elemMatch: Maybe<NodeFilterInput>;
  };

  type PageInfo = {
    readonly currentPage: Scalars['Int'];
    readonly hasPreviousPage: Scalars['Boolean'];
    readonly hasNextPage: Scalars['Boolean'];
    readonly itemCount: Scalars['Int'];
    readonly pageCount: Scalars['Int'];
    readonly perPage: Maybe<Scalars['Int']>;
    readonly totalCount: Scalars['Int'];
  };

  type Potrace = {
    readonly turnPolicy: Maybe<PotraceTurnPolicy>;
    readonly turdSize: Maybe<Scalars['Float']>;
    readonly alphaMax: Maybe<Scalars['Float']>;
    readonly optCurve: Maybe<Scalars['Boolean']>;
    readonly optTolerance: Maybe<Scalars['Float']>;
    readonly threshold: Maybe<Scalars['Int']>;
    readonly blackOnWhite: Maybe<Scalars['Boolean']>;
    readonly color: Maybe<Scalars['String']>;
    readonly background: Maybe<Scalars['String']>;
  };

  enum PotraceTurnPolicy {
    TURNPOLICY_BLACK = 'black',
    TURNPOLICY_WHITE = 'white',
    TURNPOLICY_LEFT = 'left',
    TURNPOLICY_RIGHT = 'right',
    TURNPOLICY_MINORITY = 'minority',
    TURNPOLICY_MAJORITY = 'majority',
  }

  type Query = {
    readonly file: Maybe<File>;
    readonly allFile: FileConnection;
    readonly directory: Maybe<Directory>;
    readonly allDirectory: DirectoryConnection;
    readonly site: Maybe<Site>;
    readonly allSite: SiteConnection;
    readonly sitePage: Maybe<SitePage>;
    readonly allSitePage: SitePageConnection;
    readonly imageSharp: Maybe<ImageSharp>;
    readonly allImageSharp: ImageSharpConnection;
    readonly microcmsSkills: Maybe<MicrocmsSkills>;
    readonly allMicrocmsSkills: MicrocmsSkillsConnection;
    readonly microcmsTags: Maybe<MicrocmsTags>;
    readonly allMicrocmsTags: MicrocmsTagsConnection;
    readonly microcmsWorks: Maybe<MicrocmsWorks>;
    readonly allMicrocmsWorks: MicrocmsWorksConnection;
    readonly microcmsPosts: Maybe<MicrocmsPosts>;
    readonly allMicrocmsPosts: MicrocmsPostsConnection;
    readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
    readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
    readonly sitePlugin: Maybe<SitePlugin>;
    readonly allSitePlugin: SitePluginConnection;
  };

  type Query_fileArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    ino: Maybe<FloatQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    publicURL: Maybe<StringQueryOperatorInput>;
    childImageSharp: Maybe<ImageSharpFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allFileArgs = {
    filter: Maybe<FileFilterInput>;
    sort: Maybe<FileSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_directoryArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    ino: Maybe<FloatQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allDirectoryArgs = {
    filter: Maybe<DirectoryFilterInput>;
    sort: Maybe<DirectorySortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_siteArgs = {
    buildTime: Maybe<DateQueryOperatorInput>;
    siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
    port: Maybe<IntQueryOperatorInput>;
    host: Maybe<StringQueryOperatorInput>;
    polyfill: Maybe<BooleanQueryOperatorInput>;
    pathPrefix: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allSiteArgs = {
    filter: Maybe<SiteFilterInput>;
    sort: Maybe<SiteSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_sitePageArgs = {
    path: Maybe<StringQueryOperatorInput>;
    component: Maybe<StringQueryOperatorInput>;
    internalComponentName: Maybe<StringQueryOperatorInput>;
    componentChunkName: Maybe<StringQueryOperatorInput>;
    matchPath: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages: Maybe<
      BooleanQueryOperatorInput
    >;
    context: Maybe<SitePageContextFilterInput>;
    pluginCreator: Maybe<SitePluginFilterInput>;
    pluginCreatorId: Maybe<StringQueryOperatorInput>;
    componentPath: Maybe<StringQueryOperatorInput>;
  };

  type Query_allSitePageArgs = {
    filter: Maybe<SitePageFilterInput>;
    sort: Maybe<SitePageSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_imageSharpArgs = {
    fixed: Maybe<ImageSharpFixedFilterInput>;
    resolutions: Maybe<ImageSharpResolutionsFilterInput>;
    fluid: Maybe<ImageSharpFluidFilterInput>;
    sizes: Maybe<ImageSharpSizesFilterInput>;
    original: Maybe<ImageSharpOriginalFilterInput>;
    resize: Maybe<ImageSharpResizeFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allImageSharpArgs = {
    filter: Maybe<ImageSharpFilterInput>;
    sort: Maybe<ImageSharpSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_microcmsSkillsArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    createdAt: Maybe<DateQueryOperatorInput>;
    updatedAt: Maybe<DateQueryOperatorInput>;
    title: Maybe<StringQueryOperatorInput>;
    image: Maybe<MicrocmsSkillsImageFilterInput>;
    parameter: Maybe<StringQueryOperatorInput>;
    skillsId: Maybe<StringQueryOperatorInput>;
    fields: Maybe<MicrocmsSkillsFieldsFilterInput>;
  };

  type Query_allMicrocmsSkillsArgs = {
    filter: Maybe<MicrocmsSkillsFilterInput>;
    sort: Maybe<MicrocmsSkillsSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_microcmsTagsArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    createdAt: Maybe<DateQueryOperatorInput>;
    updatedAt: Maybe<DateQueryOperatorInput>;
    publishedAt: Maybe<DateQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    slug: Maybe<StringQueryOperatorInput>;
    tagsId: Maybe<StringQueryOperatorInput>;
  };

  type Query_allMicrocmsTagsArgs = {
    filter: Maybe<MicrocmsTagsFilterInput>;
    sort: Maybe<MicrocmsTagsSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_microcmsWorksArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    createdAt: Maybe<DateQueryOperatorInput>;
    updatedAt: Maybe<DateQueryOperatorInput>;
    publishedAt: Maybe<DateQueryOperatorInput>;
    image: Maybe<MicrocmsWorksImageFilterInput>;
    title: Maybe<StringQueryOperatorInput>;
    url: Maybe<StringQueryOperatorInput>;
    description: Maybe<StringQueryOperatorInput>;
    tag: Maybe<MicrocmsWorksTagFilterListInput>;
    worksId: Maybe<StringQueryOperatorInput>;
    fields: Maybe<MicrocmsWorksFieldsFilterInput>;
  };

  type Query_allMicrocmsWorksArgs = {
    filter: Maybe<MicrocmsWorksFilterInput>;
    sort: Maybe<MicrocmsWorksSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_microcmsPostsArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    createdAt: Maybe<DateQueryOperatorInput>;
    updatedAt: Maybe<DateQueryOperatorInput>;
    publishedAt: Maybe<DateQueryOperatorInput>;
    title: Maybe<StringQueryOperatorInput>;
    tags: Maybe<MicrocmsPostsTagsFilterListInput>;
    day: Maybe<DateQueryOperatorInput>;
    image: Maybe<MicrocmsPostsImageFilterInput>;
    content: Maybe<StringQueryOperatorInput>;
    postsId: Maybe<StringQueryOperatorInput>;
    fields: Maybe<MicrocmsPostsFieldsFilterInput>;
  };

  type Query_allMicrocmsPostsArgs = {
    filter: Maybe<MicrocmsPostsFilterInput>;
    sort: Maybe<MicrocmsPostsSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_siteBuildMetadataArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    buildTime: Maybe<DateQueryOperatorInput>;
  };

  type Query_allSiteBuildMetadataArgs = {
    filter: Maybe<SiteBuildMetadataFilterInput>;
    sort: Maybe<SiteBuildMetadataSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_sitePluginArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    resolve: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    version: Maybe<StringQueryOperatorInput>;
    pluginOptions: Maybe<
      SitePluginPluginOptionsFilterInput
    >;
    nodeAPIs: Maybe<StringQueryOperatorInput>;
    browserAPIs: Maybe<StringQueryOperatorInput>;
    ssrAPIs: Maybe<StringQueryOperatorInput>;
    pluginFilepath: Maybe<StringQueryOperatorInput>;
    packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  };

  type Query_allSitePluginArgs = {
    filter: Maybe<SitePluginFilterInput>;
    sort: Maybe<SitePluginSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Site = Node & {
    readonly buildTime: Maybe<Scalars['Date']>;
    readonly siteMetadata: Maybe<SiteSiteMetadata>;
    readonly port: Maybe<Scalars['Int']>;
    readonly host: Maybe<Scalars['String']>;
    readonly polyfill: Maybe<Scalars['Boolean']>;
    readonly pathPrefix: Maybe<Scalars['String']>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Site_buildTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadata = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly buildTime: Maybe<Scalars['Date']>;
  };

  type SiteBuildMetadata_buildTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadataConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<
      SiteBuildMetadataGroupConnection
    >;
  };

  type SiteBuildMetadataConnection_distinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataEdge = {
    readonly next: Maybe<SiteBuildMetadata>;
    readonly node: SiteBuildMetadata;
    readonly previous: Maybe<SiteBuildMetadata>;
  };

  enum SiteBuildMetadataFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    buildTime = 'buildTime',
  }

  type SiteBuildMetadataFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly buildTime: Maybe<DateQueryOperatorInput>;
  };

  type SiteBuildMetadataGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadataSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>
    >;
    readonly order: Maybe<
      ReadonlyArray<Maybe<SortOrderEnum>>
    >;
  };

  type SiteConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<SiteGroupConnection>;
  };

  type SiteConnection_distinctArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SiteFieldsEnum;
  };

  type SiteEdge = {
    readonly next: Maybe<Site>;
    readonly node: Site;
    readonly previous: Maybe<Site>;
  };

  enum SiteFieldsEnum {
    buildTime = 'buildTime',
    siteMetadata___title = 'siteMetadata.title',
    siteMetadata___description = 'siteMetadata.description',
    siteMetadata___lang = 'siteMetadata.lang',
    siteMetadata___author = 'siteMetadata.author',
    siteMetadata___siteUrl = 'siteMetadata.siteUrl',
    siteMetadata___locale = 'siteMetadata.locale',
    siteMetadata___fbappid = 'siteMetadata.fbappid',
    port = 'port',
    host = 'host',
    polyfill = 'polyfill',
    pathPrefix = 'pathPrefix',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type SiteFilterInput = {
    readonly buildTime: Maybe<DateQueryOperatorInput>;
    readonly siteMetadata: Maybe<
      SiteSiteMetadataFilterInput
    >;
    readonly port: Maybe<IntQueryOperatorInput>;
    readonly host: Maybe<StringQueryOperatorInput>;
    readonly polyfill: Maybe<BooleanQueryOperatorInput>;
    readonly pathPrefix: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type SiteGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SitePage = Node & {
    readonly path: Scalars['String'];
    readonly component: Scalars['String'];
    readonly internalComponentName: Scalars['String'];
    readonly componentChunkName: Scalars['String'];
    readonly matchPath: Maybe<Scalars['String']>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly isCreatedByStatefulCreatePages: Maybe<
      Scalars['Boolean']
    >;
    readonly context: Maybe<SitePageContext>;
    readonly pluginCreator: Maybe<SitePlugin>;
    readonly pluginCreatorId: Maybe<Scalars['String']>;
    readonly componentPath: Maybe<Scalars['String']>;
  };

  type SitePageConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<SitePageGroupConnection>;
  };

  type SitePageConnection_distinctArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SitePageFieldsEnum;
  };

  type SitePageContext = {
    readonly post: Maybe<SitePageContextPost>;
    readonly next: Maybe<SitePageContextNext>;
    readonly previous: Maybe<SitePageContextPrevious>;
    readonly skip: Maybe<Scalars['Int']>;
    readonly limit: Maybe<Scalars['Int']>;
    readonly currentPage: Maybe<Scalars['Int']>;
    readonly isFirst: Maybe<Scalars['Boolean']>;
    readonly isLast: Maybe<Scalars['Boolean']>;
    readonly tagsId: Maybe<Scalars['String']>;
    readonly tagsname: Maybe<Scalars['String']>;
  };

  type SitePageContextFilterInput = {
    readonly post: Maybe<SitePageContextPostFilterInput>;
    readonly next: Maybe<SitePageContextNextFilterInput>;
    readonly previous: Maybe<
      SitePageContextPreviousFilterInput
    >;
    readonly skip: Maybe<IntQueryOperatorInput>;
    readonly limit: Maybe<IntQueryOperatorInput>;
    readonly currentPage: Maybe<IntQueryOperatorInput>;
    readonly isFirst: Maybe<BooleanQueryOperatorInput>;
    readonly isLast: Maybe<BooleanQueryOperatorInput>;
    readonly tagsId: Maybe<StringQueryOperatorInput>;
    readonly tagsname: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextNext = {
    readonly title: Maybe<Scalars['String']>;
    readonly postsId: Maybe<Scalars['String']>;
  };

  type SitePageContextNextFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly postsId: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextPost = {
    readonly id: Maybe<Scalars['String']>;
    readonly postsId: Maybe<Scalars['String']>;
    readonly title: Maybe<Scalars['String']>;
    readonly tags: Maybe<
      ReadonlyArray<Maybe<SitePageContextPostTags>>
    >;
    readonly createdAt: Maybe<Scalars['String']>;
    readonly updatedAt: Maybe<Scalars['String']>;
    readonly image: Maybe<SitePageContextPostImage>;
    readonly fields: Maybe<SitePageContextPostFields>;
    readonly content: Maybe<Scalars['String']>;
  };

  type SitePageContextPostFields = {
    readonly featuredImage: Maybe<
      SitePageContextPostFieldsFeaturedImage
    >;
  };

  type SitePageContextPostFieldsFeaturedImage = {
    readonly fluid: Maybe<
      SitePageContextPostFieldsFeaturedImageFluid
    >;
  };

  type SitePageContextPostFieldsFeaturedImageFilterInput = {
    readonly fluid: Maybe<
      SitePageContextPostFieldsFeaturedImageFluidFilterInput
    >;
  };

  type SitePageContextPostFieldsFeaturedImageFluid = {
    readonly sizes: Maybe<Scalars['String']>;
    readonly src: Maybe<Scalars['String']>;
    readonly srcSet: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly base64: Maybe<Scalars['String']>;
    readonly aspectRatio: Maybe<Scalars['Float']>;
  };

  type SitePageContextPostFieldsFeaturedImageFluidFilterInput = {
    readonly sizes: Maybe<StringQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  };

  type SitePageContextPostFieldsFilterInput = {
    readonly featuredImage: Maybe<
      SitePageContextPostFieldsFeaturedImageFilterInput
    >;
  };

  type SitePageContextPostFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly postsId: Maybe<StringQueryOperatorInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly tags: Maybe<
      SitePageContextPostTagsFilterListInput
    >;
    readonly createdAt: Maybe<StringQueryOperatorInput>;
    readonly updatedAt: Maybe<StringQueryOperatorInput>;
    readonly image: Maybe<
      SitePageContextPostImageFilterInput
    >;
    readonly fields: Maybe<
      SitePageContextPostFieldsFilterInput
    >;
    readonly content: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextPostImage = {
    readonly url: Maybe<Scalars['String']>;
  };

  type SitePageContextPostImageFilterInput = {
    readonly url: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextPostTags = {
    readonly id: Maybe<Scalars['String']>;
    readonly name: Maybe<Scalars['String']>;
  };

  type SitePageContextPostTagsFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextPostTagsFilterListInput = {
    readonly elemMatch: Maybe<
      SitePageContextPostTagsFilterInput
    >;
  };

  type SitePageContextPrevious = {
    readonly title: Maybe<Scalars['String']>;
    readonly postsId: Maybe<Scalars['String']>;
  };

  type SitePageContextPreviousFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly postsId: Maybe<StringQueryOperatorInput>;
  };

  type SitePageEdge = {
    readonly next: Maybe<SitePage>;
    readonly node: SitePage;
    readonly previous: Maybe<SitePage>;
  };

  enum SitePageFieldsEnum {
    path = 'path',
    component = 'component',
    internalComponentName = 'internalComponentName',
    componentChunkName = 'componentChunkName',
    matchPath = 'matchPath',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
    context___post___id = 'context.post.id',
    context___post___postsId = 'context.post.postsId',
    context___post___title = 'context.post.title',
    context___post___tags = 'context.post.tags',
    context___post___tags___id = 'context.post.tags.id',
    context___post___tags___name = 'context.post.tags.name',
    context___post___createdAt = 'context.post.createdAt',
    context___post___updatedAt = 'context.post.updatedAt',
    context___post___image___url = 'context.post.image.url',
    context___post___content = 'context.post.content',
    context___next___title = 'context.next.title',
    context___next___postsId = 'context.next.postsId',
    context___previous___title = 'context.previous.title',
    context___previous___postsId = 'context.previous.postsId',
    context___skip = 'context.skip',
    context___limit = 'context.limit',
    context___currentPage = 'context.currentPage',
    context___isFirst = 'context.isFirst',
    context___isLast = 'context.isLast',
    context___tagsId = 'context.tagsId',
    context___tagsname = 'context.tagsname',
    pluginCreator___id = 'pluginCreator.id',
    pluginCreator___parent___id = 'pluginCreator.parent.id',
    pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
    pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
    pluginCreator___parent___children = 'pluginCreator.parent.children',
    pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
    pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
    pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
    pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
    pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
    pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
    pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
    pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
    pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
    pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
    pluginCreator___children = 'pluginCreator.children',
    pluginCreator___children___id = 'pluginCreator.children.id',
    pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
    pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
    pluginCreator___children___children = 'pluginCreator.children.children',
    pluginCreator___children___children___id = 'pluginCreator.children.children.id',
    pluginCreator___children___children___children = 'pluginCreator.children.children.children',
    pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
    pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
    pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
    pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
    pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
    pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
    pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
    pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
    pluginCreator___internal___content = 'pluginCreator.internal.content',
    pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
    pluginCreator___internal___description = 'pluginCreator.internal.description',
    pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
    pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
    pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
    pluginCreator___internal___owner = 'pluginCreator.internal.owner',
    pluginCreator___internal___type = 'pluginCreator.internal.type',
    pluginCreator___resolve = 'pluginCreator.resolve',
    pluginCreator___name = 'pluginCreator.name',
    pluginCreator___version = 'pluginCreator.version',
    pluginCreator___pluginOptions___trackingId = 'pluginCreator.pluginOptions.trackingId',
    pluginCreator___pluginOptions___head = 'pluginCreator.pluginOptions.head',
    pluginCreator___pluginOptions___respectDNT = 'pluginCreator.pluginOptions.respectDNT',
    pluginCreator___pluginOptions___host = 'pluginCreator.pluginOptions.host',
    pluginCreator___pluginOptions___sitemap = 'pluginCreator.pluginOptions.sitemap',
    pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
    pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
    pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
    pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
    pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
    pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
    pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
    pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
    pluginCreator___pluginOptions___icon_options___purpose = 'pluginCreator.pluginOptions.icon_options.purpose',
    pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator.pluginOptions.cache_busting_mode',
    pluginCreator___pluginOptions___include_favicon = 'pluginCreator.pluginOptions.include_favicon',
    pluginCreator___pluginOptions___legacy = 'pluginCreator.pluginOptions.legacy',
    pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator.pluginOptions.theme_color_in_head',
    pluginCreator___pluginOptions___cacheDigest = 'pluginCreator.pluginOptions.cacheDigest',
    pluginCreator___pluginOptions___apiKey = 'pluginCreator.pluginOptions.apiKey',
    pluginCreator___pluginOptions___serviceId = 'pluginCreator.pluginOptions.serviceId',
    pluginCreator___pluginOptions___apis = 'pluginCreator.pluginOptions.apis',
    pluginCreator___pluginOptions___apis___endpoint = 'pluginCreator.pluginOptions.apis.endpoint',
    pluginCreator___pluginOptions___domain = 'pluginCreator.pluginOptions.domain',
    pluginCreator___pluginOptions___fields = 'pluginCreator.pluginOptions.fields',
    pluginCreator___pluginOptions___fields___nodeType = 'pluginCreator.pluginOptions.fields.nodeType',
    pluginCreator___pluginOptions___fields___fieldName = 'pluginCreator.pluginOptions.fields.fieldName',
    pluginCreator___pluginOptions___stages = 'pluginCreator.pluginOptions.stages',
    pluginCreator___pluginOptions___options___emitWarning = 'pluginCreator.pluginOptions.options.emitWarning',
    pluginCreator___pluginOptions___options___failOnError = 'pluginCreator.pluginOptions.options.failOnError',
    pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
    pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
    pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
    pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
    pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
    pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
    pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
    pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
    pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
    pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
    pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
    pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
    pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
    pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
    pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
    pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
    pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
    pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
    pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
    pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
    pluginCreatorId = 'pluginCreatorId',
    componentPath = 'componentPath',
  }

  type SitePageFilterInput = {
    readonly path: Maybe<StringQueryOperatorInput>;
    readonly component: Maybe<StringQueryOperatorInput>;
    readonly internalComponentName: Maybe<
      StringQueryOperatorInput
    >;
    readonly componentChunkName: Maybe<
      StringQueryOperatorInput
    >;
    readonly matchPath: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly isCreatedByStatefulCreatePages: Maybe<
      BooleanQueryOperatorInput
    >;
    readonly context: Maybe<SitePageContextFilterInput>;
    readonly pluginCreator: Maybe<SitePluginFilterInput>;
    readonly pluginCreatorId: Maybe<
      StringQueryOperatorInput
    >;
    readonly componentPath: Maybe<StringQueryOperatorInput>;
  };

  type SitePageGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SitePageSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<SitePageFieldsEnum>>
    >;
    readonly order: Maybe<
      ReadonlyArray<Maybe<SortOrderEnum>>
    >;
  };

  type SitePlugin = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly resolve: Maybe<Scalars['String']>;
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
    readonly pluginOptions: Maybe<SitePluginPluginOptions>;
    readonly nodeAPIs: Maybe<
      ReadonlyArray<Maybe<Scalars['String']>>
    >;
    readonly browserAPIs: Maybe<
      ReadonlyArray<Maybe<Scalars['String']>>
    >;
    readonly ssrAPIs: Maybe<
      ReadonlyArray<Maybe<Scalars['String']>>
    >;
    readonly pluginFilepath: Maybe<Scalars['String']>;
    readonly packageJson: Maybe<SitePluginPackageJson>;
  };

  type SitePluginConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<
      SitePluginGroupConnection
    >;
  };

  type SitePluginConnection_distinctArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SitePluginFieldsEnum;
  };

  type SitePluginEdge = {
    readonly next: Maybe<SitePlugin>;
    readonly node: SitePlugin;
    readonly previous: Maybe<SitePlugin>;
  };

  enum SitePluginFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    resolve = 'resolve',
    name = 'name',
    version = 'version',
    pluginOptions___trackingId = 'pluginOptions.trackingId',
    pluginOptions___head = 'pluginOptions.head',
    pluginOptions___respectDNT = 'pluginOptions.respectDNT',
    pluginOptions___host = 'pluginOptions.host',
    pluginOptions___sitemap = 'pluginOptions.sitemap',
    pluginOptions___env___development___policy = 'pluginOptions.env.development.policy',
    pluginOptions___env___production___policy = 'pluginOptions.env.production.policy',
    pluginOptions___name = 'pluginOptions.name',
    pluginOptions___path = 'pluginOptions.path',
    pluginOptions___short_name = 'pluginOptions.short_name',
    pluginOptions___start_url = 'pluginOptions.start_url',
    pluginOptions___background_color = 'pluginOptions.background_color',
    pluginOptions___theme_color = 'pluginOptions.theme_color',
    pluginOptions___display = 'pluginOptions.display',
    pluginOptions___icon = 'pluginOptions.icon',
    pluginOptions___icon_options___purpose = 'pluginOptions.icon_options.purpose',
    pluginOptions___cache_busting_mode = 'pluginOptions.cache_busting_mode',
    pluginOptions___include_favicon = 'pluginOptions.include_favicon',
    pluginOptions___legacy = 'pluginOptions.legacy',
    pluginOptions___theme_color_in_head = 'pluginOptions.theme_color_in_head',
    pluginOptions___cacheDigest = 'pluginOptions.cacheDigest',
    pluginOptions___apiKey = 'pluginOptions.apiKey',
    pluginOptions___serviceId = 'pluginOptions.serviceId',
    pluginOptions___apis = 'pluginOptions.apis',
    pluginOptions___apis___endpoint = 'pluginOptions.apis.endpoint',
    pluginOptions___domain = 'pluginOptions.domain',
    pluginOptions___fields = 'pluginOptions.fields',
    pluginOptions___fields___nodeType = 'pluginOptions.fields.nodeType',
    pluginOptions___fields___fieldName = 'pluginOptions.fields.fieldName',
    pluginOptions___stages = 'pluginOptions.stages',
    pluginOptions___options___emitWarning = 'pluginOptions.options.emitWarning',
    pluginOptions___options___failOnError = 'pluginOptions.options.failOnError',
    pluginOptions___pathCheck = 'pluginOptions.pathCheck',
    nodeAPIs = 'nodeAPIs',
    browserAPIs = 'browserAPIs',
    ssrAPIs = 'ssrAPIs',
    pluginFilepath = 'pluginFilepath',
    packageJson___name = 'packageJson.name',
    packageJson___description = 'packageJson.description',
    packageJson___version = 'packageJson.version',
    packageJson___main = 'packageJson.main',
    packageJson___license = 'packageJson.license',
    packageJson___dependencies = 'packageJson.dependencies',
    packageJson___dependencies___name = 'packageJson.dependencies.name',
    packageJson___dependencies___version = 'packageJson.dependencies.version',
    packageJson___devDependencies = 'packageJson.devDependencies',
    packageJson___devDependencies___name = 'packageJson.devDependencies.name',
    packageJson___devDependencies___version = 'packageJson.devDependencies.version',
    packageJson___peerDependencies = 'packageJson.peerDependencies',
    packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
    packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
    packageJson___keywords = 'packageJson.keywords',
  }

  type SitePluginFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly resolve: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly pluginOptions: Maybe<
      SitePluginPluginOptionsFilterInput
    >;
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
    readonly browserAPIs: Maybe<StringQueryOperatorInput>;
    readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
    readonly pluginFilepath: Maybe<
      StringQueryOperatorInput
    >;
    readonly packageJson: Maybe<
      SitePluginPackageJsonFilterInput
    >;
  };

  type SitePluginGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJson = {
    readonly name: Maybe<Scalars['String']>;
    readonly description: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
    readonly main: Maybe<Scalars['String']>;
    readonly license: Maybe<Scalars['String']>;
    readonly dependencies: Maybe<
      ReadonlyArray<
        Maybe<SitePluginPackageJsonDependencies>
      >
    >;
    readonly devDependencies: Maybe<
      ReadonlyArray<
        Maybe<SitePluginPackageJsonDevDependencies>
      >
    >;
    readonly peerDependencies: Maybe<
      ReadonlyArray<
        Maybe<SitePluginPackageJsonPeerDependencies>
      >
    >;
    readonly keywords: Maybe<
      ReadonlyArray<Maybe<Scalars['String']>>
    >;
  };

  type SitePluginPackageJsonDependencies = {
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDependenciesFilterListInput = {
    readonly elemMatch: Maybe<
      SitePluginPackageJsonDependenciesFilterInput
    >;
  };

  type SitePluginPackageJsonDevDependencies = {
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonDevDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDevDependenciesFilterListInput = {
    readonly elemMatch: Maybe<
      SitePluginPackageJsonDevDependenciesFilterInput
    >;
  };

  type SitePluginPackageJsonFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly main: Maybe<StringQueryOperatorInput>;
    readonly license: Maybe<StringQueryOperatorInput>;
    readonly dependencies: Maybe<
      SitePluginPackageJsonDependenciesFilterListInput
    >;
    readonly devDependencies: Maybe<
      SitePluginPackageJsonDevDependenciesFilterListInput
    >;
    readonly peerDependencies: Maybe<
      SitePluginPackageJsonPeerDependenciesFilterListInput
    >;
    readonly keywords: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependencies = {
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    readonly elemMatch: Maybe<
      SitePluginPackageJsonPeerDependenciesFilterInput
    >;
  };

  type SitePluginPluginOptions = {
    readonly trackingId: Maybe<Scalars['String']>;
    readonly head: Maybe<Scalars['Boolean']>;
    readonly respectDNT: Maybe<Scalars['Boolean']>;
    readonly host: Maybe<Scalars['String']>;
    readonly sitemap: Maybe<Scalars['String']>;
    readonly env: Maybe<SitePluginPluginOptionsEnv>;
    readonly name: Maybe<Scalars['String']>;
    readonly path: Maybe<Scalars['String']>;
    readonly short_name: Maybe<Scalars['String']>;
    readonly start_url: Maybe<Scalars['String']>;
    readonly background_color: Maybe<Scalars['String']>;
    readonly theme_color: Maybe<Scalars['String']>;
    readonly display: Maybe<Scalars['String']>;
    readonly icon: Maybe<Scalars['String']>;
    readonly icon_options: Maybe<
      SitePluginPluginOptionsIcon_options
    >;
    readonly cache_busting_mode: Maybe<Scalars['String']>;
    readonly include_favicon: Maybe<Scalars['Boolean']>;
    readonly legacy: Maybe<Scalars['Boolean']>;
    readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
    readonly cacheDigest: Maybe<Scalars['String']>;
    readonly apiKey: Maybe<Scalars['String']>;
    readonly serviceId: Maybe<Scalars['String']>;
    readonly apis: Maybe<
      ReadonlyArray<Maybe<SitePluginPluginOptionsApis>>
    >;
    readonly domain: Maybe<Scalars['String']>;
    readonly fields: Maybe<
      ReadonlyArray<Maybe<SitePluginPluginOptionsFields>>
    >;
    readonly stages: Maybe<
      ReadonlyArray<Maybe<Scalars['String']>>
    >;
    readonly options: Maybe<SitePluginPluginOptionsOptions>;
    readonly pathCheck: Maybe<Scalars['Boolean']>;
  };

  type SitePluginPluginOptionsApis = {
    readonly endpoint: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsApisFilterInput = {
    readonly endpoint: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsApisFilterListInput = {
    readonly elemMatch: Maybe<
      SitePluginPluginOptionsApisFilterInput
    >;
  };

  type SitePluginPluginOptionsEnv = {
    readonly development: Maybe<
      SitePluginPluginOptionsEnvDevelopment
    >;
    readonly production: Maybe<
      SitePluginPluginOptionsEnvProduction
    >;
  };

  type SitePluginPluginOptionsEnvDevelopment = {
    readonly policy: Maybe<
      ReadonlyArray<
        Maybe<SitePluginPluginOptionsEnvDevelopmentPolicy>
      >
    >;
  };

  type SitePluginPluginOptionsEnvDevelopmentFilterInput = {
    readonly policy: Maybe<
      SitePluginPluginOptionsEnvDevelopmentPolicyFilterListInput
    >;
  };

  type SitePluginPluginOptionsEnvDevelopmentPolicy = {
    readonly userAgent: Maybe<Scalars['String']>;
    readonly disallow: Maybe<
      ReadonlyArray<Maybe<Scalars['String']>>
    >;
  };

  type SitePluginPluginOptionsEnvDevelopmentPolicyFilterInput = {
    readonly userAgent: Maybe<StringQueryOperatorInput>;
    readonly disallow: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsEnvDevelopmentPolicyFilterListInput = {
    readonly elemMatch: Maybe<
      SitePluginPluginOptionsEnvDevelopmentPolicyFilterInput
    >;
  };

  type SitePluginPluginOptionsEnvFilterInput = {
    readonly development: Maybe<
      SitePluginPluginOptionsEnvDevelopmentFilterInput
    >;
    readonly production: Maybe<
      SitePluginPluginOptionsEnvProductionFilterInput
    >;
  };

  type SitePluginPluginOptionsEnvProduction = {
    readonly policy: Maybe<
      ReadonlyArray<
        Maybe<SitePluginPluginOptionsEnvProductionPolicy>
      >
    >;
  };

  type SitePluginPluginOptionsEnvProductionFilterInput = {
    readonly policy: Maybe<
      SitePluginPluginOptionsEnvProductionPolicyFilterListInput
    >;
  };

  type SitePluginPluginOptionsEnvProductionPolicy = {
    readonly userAgent: Maybe<Scalars['String']>;
    readonly allow: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsEnvProductionPolicyFilterInput = {
    readonly userAgent: Maybe<StringQueryOperatorInput>;
    readonly allow: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsEnvProductionPolicyFilterListInput = {
    readonly elemMatch: Maybe<
      SitePluginPluginOptionsEnvProductionPolicyFilterInput
    >;
  };

  type SitePluginPluginOptionsFields = {
    readonly nodeType: Maybe<Scalars['String']>;
    readonly fieldName: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsFieldsFilterInput = {
    readonly nodeType: Maybe<StringQueryOperatorInput>;
    readonly fieldName: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsFieldsFilterListInput = {
    readonly elemMatch: Maybe<
      SitePluginPluginOptionsFieldsFilterInput
    >;
  };

  type SitePluginPluginOptionsFilterInput = {
    readonly trackingId: Maybe<StringQueryOperatorInput>;
    readonly head: Maybe<BooleanQueryOperatorInput>;
    readonly respectDNT: Maybe<BooleanQueryOperatorInput>;
    readonly host: Maybe<StringQueryOperatorInput>;
    readonly sitemap: Maybe<StringQueryOperatorInput>;
    readonly env: Maybe<
      SitePluginPluginOptionsEnvFilterInput
    >;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly path: Maybe<StringQueryOperatorInput>;
    readonly short_name: Maybe<StringQueryOperatorInput>;
    readonly start_url: Maybe<StringQueryOperatorInput>;
    readonly background_color: Maybe<
      StringQueryOperatorInput
    >;
    readonly theme_color: Maybe<StringQueryOperatorInput>;
    readonly display: Maybe<StringQueryOperatorInput>;
    readonly icon: Maybe<StringQueryOperatorInput>;
    readonly icon_options: Maybe<
      SitePluginPluginOptionsIcon_optionsFilterInput
    >;
    readonly cache_busting_mode: Maybe<
      StringQueryOperatorInput
    >;
    readonly include_favicon: Maybe<
      BooleanQueryOperatorInput
    >;
    readonly legacy: Maybe<BooleanQueryOperatorInput>;
    readonly theme_color_in_head: Maybe<
      BooleanQueryOperatorInput
    >;
    readonly cacheDigest: Maybe<StringQueryOperatorInput>;
    readonly apiKey: Maybe<StringQueryOperatorInput>;
    readonly serviceId: Maybe<StringQueryOperatorInput>;
    readonly apis: Maybe<
      SitePluginPluginOptionsApisFilterListInput
    >;
    readonly domain: Maybe<StringQueryOperatorInput>;
    readonly fields: Maybe<
      SitePluginPluginOptionsFieldsFilterListInput
    >;
    readonly stages: Maybe<StringQueryOperatorInput>;
    readonly options: Maybe<
      SitePluginPluginOptionsOptionsFilterInput
    >;
    readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePluginPluginOptionsIcon_options = {
    readonly purpose: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsIcon_optionsFilterInput = {
    readonly purpose: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsOptions = {
    readonly emitWarning: Maybe<Scalars['Boolean']>;
    readonly failOnError: Maybe<Scalars['Boolean']>;
  };

  type SitePluginPluginOptionsOptionsFilterInput = {
    readonly emitWarning: Maybe<BooleanQueryOperatorInput>;
    readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePluginSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<SitePluginFieldsEnum>>
    >;
    readonly order: Maybe<
      ReadonlyArray<Maybe<SortOrderEnum>>
    >;
  };

  type SiteSiteMetadata = {
    readonly title: Maybe<Scalars['String']>;
    readonly description: Maybe<Scalars['String']>;
    readonly lang: Maybe<Scalars['String']>;
    readonly author: Maybe<Scalars['String']>;
    readonly siteUrl: Maybe<Scalars['String']>;
    readonly locale: Maybe<Scalars['String']>;
    readonly fbappid: Maybe<Scalars['String']>;
  };

  type SiteSiteMetadataFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly lang: Maybe<StringQueryOperatorInput>;
    readonly author: Maybe<StringQueryOperatorInput>;
    readonly siteUrl: Maybe<StringQueryOperatorInput>;
    readonly locale: Maybe<StringQueryOperatorInput>;
    readonly fbappid: Maybe<StringQueryOperatorInput>;
  };

  type SiteSortInput = {
    readonly fields: Maybe<
      ReadonlyArray<Maybe<SiteFieldsEnum>>
    >;
    readonly order: Maybe<
      ReadonlyArray<Maybe<SortOrderEnum>>
    >;
  };

  enum SortOrderEnum {
    ASC = 'ASC',
    DESC = 'DESC',
  }

  type StringQueryOperatorInput = {
    readonly eq: Maybe<Scalars['String']>;
    readonly ne: Maybe<Scalars['String']>;
    readonly in: Maybe<
      ReadonlyArray<Maybe<Scalars['String']>>
    >;
    readonly nin: Maybe<
      ReadonlyArray<Maybe<Scalars['String']>>
    >;
    readonly regex: Maybe<Scalars['String']>;
    readonly glob: Maybe<Scalars['String']>;
  };

  type PagePostsQueryVariables = Exact<{
    skip: Scalars['Int'];
    limit: Scalars['Int'];
  }>;

  type PagePostsQuery = {
    readonly allMicrocmsPosts: {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<
          MicrocmsPosts,
          | 'id'
          | 'postsId'
          | 'title'
          | 'createdAt'
          | 'updatedAt'
          | 'content'
        > & {
          readonly tags: Maybe<
            ReadonlyArray<
              Maybe<Pick<MicrocmsPostsTags, 'id' | 'name'>>
            >
          >;
          readonly fields: Maybe<{
            readonly featuredImage: Maybe<{
              readonly fluid: Maybe<
                Pick<
                  ImgixFluid,
                  | 'src'
                  | 'sizes'
                  | 'base64'
                  | 'aspectRatio'
                  | 'srcSet'
                  | 'srcSetWebp'
                  | 'srcWebp'
                >
              >;
            }>;
          }>;
        };
      }>;
    };
  };

  type PageTagQueryVariables = Exact<{
    tagsId: Scalars['String'];
    skip: Scalars['Int'];
    limit: Scalars['Int'];
  }>;

  type PageTagQuery = {
    readonly allMicrocmsPosts: {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<
          MicrocmsPosts,
          | 'id'
          | 'postsId'
          | 'title'
          | 'createdAt'
          | 'updatedAt'
        > & {
          readonly tags: Maybe<
            ReadonlyArray<
              Maybe<Pick<MicrocmsPostsTags, 'id' | 'name'>>
            >
          >;
          readonly fields: Maybe<{
            readonly featuredImage: Maybe<{
              readonly fluid: Maybe<
                Pick<
                  ImgixFluid,
                  | 'src'
                  | 'sizes'
                  | 'base64'
                  | 'aspectRatio'
                  | 'srcSet'
                  | 'srcSetWebp'
                  | 'srcWebp'
                >
              >;
            }>;
          }>;
        };
      }>;
    };
  };

  type PagesQueryQueryVariables = Exact<{
    [key: string]: never;
  }>;

  type PagesQueryQuery = {
    readonly allSitePage: {
      readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>>;
    };
  };

  type PageAboutQueryVariables = Exact<{
    [key: string]: never;
  }>;

  type PageAboutQuery = {
    readonly allMicrocmsSkills: {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<
          MicrocmsSkills,
          'id' | 'title' | 'parameter'
        > & {
          readonly fields: Maybe<{
            readonly featuredImage: Maybe<{
              readonly fixed: Maybe<
                Pick<
                  ImgixFixed,
                  | 'src'
                  | 'base64'
                  | 'srcSet'
                  | 'srcSetWebp'
                  | 'srcWebp'
                  | 'height'
                  | 'width'
                >
              >;
            }>;
          }>;
        };
      }>;
    };
  };

  type PageWorksQueryVariables = Exact<{
    [key: string]: never;
  }>;

  type PageWorksQuery = {
    readonly site: {
      readonly nodes: ReadonlyArray<
        Pick<
          MicrocmsWorks,
          'id' | 'title' | 'url' | 'description'
        > & {
          readonly fields: Maybe<{
            readonly featuredImage: Maybe<{
              readonly fluid: Maybe<
                Pick<
                  ImgixFluid,
                  | 'src'
                  | 'sizes'
                  | 'srcSet'
                  | 'srcSetWebp'
                  | 'srcWebp'
                  | 'base64'
                  | 'aspectRatio'
                >
              >;
            }>;
          }>;
        }
      >;
    };
    readonly speech: {
      readonly nodes: ReadonlyArray<
        Pick<
          MicrocmsWorks,
          'id' | 'title' | 'url' | 'description'
        > & {
          readonly fields: Maybe<{
            readonly featuredImage: Maybe<{
              readonly fluid: Maybe<
                Pick<
                  ImgixFluid,
                  | 'src'
                  | 'sizes'
                  | 'srcSet'
                  | 'srcSetWebp'
                  | 'srcWebp'
                  | 'base64'
                  | 'aspectRatio'
                >
              >;
            }>;
          }>;
        }
      >;
    };
  };
}
