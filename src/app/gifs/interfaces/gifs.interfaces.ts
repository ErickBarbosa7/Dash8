
export interface GifsResponse {
  data:       Gif[];
  pagination: Pagination;
  meta:       Meta;
}

export interface Gif {
  id:               string;
  title:            string;
  images:           Images;
}

export interface Images {
  original:                 The480_WStill;
  downsized_large:          The480_WStill;
  fixed_height_small_still: The480_WStill;
  preview_gif:              The480_WStill;
}

export interface The480_WStill {
  height: string;
  width:  string;
  size:   string;
  url:    string;
}

export interface Meta {
  status:      number;
  msg:         string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count:       number;
  offset:      number;
}