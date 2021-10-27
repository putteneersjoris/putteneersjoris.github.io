from bing_image_downloader import downloader
searchterm = str(input("searchterm:"))
amount = int(input("limit:"))

downloader.download(searchterm, limit=amount,  output_dir='dataset', adult_filter_off=True, force_replace=False, timeout=60, verbose=True)