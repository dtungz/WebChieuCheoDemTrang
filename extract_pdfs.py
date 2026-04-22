import fitz
import sys
import glob
import os

sys.stdout.reconfigure(encoding='utf-8')

docs_dir = r"f:\Git\WebsiteMaSoi\docs"
all_pdfs = sorted(glob.glob(os.path.join(docs_dir, "*.pdf")))

# Check game master handbook (file 3) for skill details
for pdf_path in all_pdfs:
    basename = os.path.basename(pdf_path)
    if basename.startswith("3."):
        print("=" * 80)
        print(f"FILE: {basename}")
        print("=" * 80)
        doc = fitz.open(pdf_path)
        for i, page in enumerate(doc):
            text = page.get_text()
            if text.strip():
                print(f"\n--- PAGE {i+1} ---")
                print(text)
        doc.close()
