#!/bin/bash

# Define the source and temporary compressed file
SOURCE_FILE="dist/styled-system/styles.css"
TEMP_FILE="/tmp/styles.css.gz"

# Get the original file size in bytes
original_size=$(stat -f%z "$SOURCE_FILE")

# Get the compressed file size in bytes
compressed_size=$(gzip -9 -c "$SOURCE_FILE" | wc -c)

# Calculate the compression ratio in percentage
compression_ratio=$(echo "scale=2; 100 * $compressed_size / $original_size" | bc)

# Format and convert sizes to KiB (1 KiB = 1024 bytes)
original_size_kib=$(echo "scale=1; $original_size / 1024" | bc)
compressed_size_kib=$(echo "scale=1; $compressed_size / 1024" | bc)

# Calculate and format the compression rate
compression_rate=$(echo "scale=1; 100 - $compression_ratio" | bc)

# Print the results
printf "$SOURCE_FILE %.1fKiB -> %.1fKiB (compression rate: %.0f%%)\n" "$original_size_kib" "$compressed_size_kib" "$compression_rate"
